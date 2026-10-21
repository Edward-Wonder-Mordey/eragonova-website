import React, { useMemo, useState } from "react";
import { ArrowRight, AlertTriangle, CheckCircle2, Download, ExternalLink, ShieldCheck, Search, X } from "lucide-react";

const helpGuides = [
  {
    id: "windows-11-usb",
    title: "How to install Windows 11 from a USB flash drive",
    summary: "Create official installation media, protect your files, boot from USB and install Windows 11.",
    steps: [
      "Back up documents, photos, browser data and any files you need. A clean installation can erase files and partitions.",
      "Check that the PC meets Windows 11 requirements and confirm you have a valid Windows licence. Keep the device connected to power.",
      "On a working PC, download Microsoft’s official Windows 11 installation media tool from the Microsoft download page linked below.",
      "Use the tool to create a bootable USB drive. The USB drive will be erased; use an empty drive with at least 8 GB capacity.",
      "Insert the USB into the target PC and restart. Open the device’s one-time boot menu using the key shown by its manufacturer (often F12, F9, Esc or F11), then select the UEFI USB device.",
      "Choose language and keyboard settings, then select Install Windows. Enter a product key if requested, or choose the edition that matches your digital licence.",
      "For a clean install, choose the correct Windows edition and target drive only after verifying backups. Deleting or formatting partitions permanently removes data. If unsure, stop and ask a technician.",
      "Complete setup, connect to the internet, run Windows Update, install manufacturer drivers, restore files from backup and confirm activation."
    ],
    caution: "Do not download Windows installers, activation tools or drivers from unofficial websites. Do not delete partitions if you need their files or are unsure which drive is which.",
    links: [{ label: "Microsoft: Download Windows 11", url: "https://www.microsoft.com/software-download/windows11" }]
  },
  {
    id: "windows-11-reinstall",
    title: "How to reinstall Windows 11 without a USB drive",
    summary: "Use Windows’ built-in recovery options when Windows still starts and you want to reset or repair the PC.",
    steps: [
      "Back up important files first and make sure you know the sign-in details for your Microsoft account and any required applications.",
      "If the PC starts normally, open Settings → System → Recovery.",
      "For a full reset, select Reset this PC. Choose Keep my files to reinstall Windows while retaining personal files, or Remove everything for a full wipe.",
      "Choose Cloud download for a fresh Windows copy or Local reinstall to use files already on the PC. Keep the PC connected to power and internet if using Cloud download.",
      "Read the summary carefully before selecting Reset. Remove everything can erase your data; work or school devices may also be managed by an organisation.",
      "After setup, install updates, verify activation, restore files and reinstall applications."
    ],
    caution: "“Keep my files” is not a backup and may remove applications and settings. If Windows will not start, the device is encrypted, or it belongs to an employer or school, get help before resetting.",
    links: [{ label: "Microsoft Support: Recovery options in Windows", url: "https://support.microsoft.com/windows/recovery-options-in-windows-31ce2444-7de3-818c-d626-e3b5a3024da5" }]
  },
  {
    id: "slow-windows",
    title: "How to fix a slow Windows computer safely",
    summary: "Start with safe checks before installing cleanup software or changing system settings.",
    steps: [
      "Restart the PC and check whether the slowdown continues.",
      "Open Task Manager with Ctrl + Shift + Esc and check whether CPU, Memory or Disk usage stays unusually high. Close only apps you recognise and are not using.",
      "Check free storage in Settings → System → Storage. Use Windows Storage settings to remove temporary files; review selections before deleting.",
      "Install Windows updates and restart. Update apps from their official sources.",
      "Run a scan with Windows Security. Do not install unknown “PC cleaner”, driver updater or antivirus tools from pop-up ads.",
      "If the slowdown began after a new app or device, note the change and seek help before removing drivers or editing the registry."
    ],
    caution: "Avoid registry cleaners, forced shutdowns during updates and deleting folders inside Windows or Program Files."
  },
  {
    id: "wifi-troubleshooting",
    title: "How to troubleshoot Wi-Fi that keeps disconnecting",
    summary: "Find out whether the issue is one device, the router or your internet provider.",
    steps: [
      "Check whether other devices disconnect at the same time. If all devices are affected, the router or provider may be the cause.",
      "Move closer to the router and check whether thick walls, appliances or distance affect the signal.",
      "Restart the affected device. If all devices are affected, power-cycle the router once using its normal power button or instructions.",
      "Check cables and router lights, then check your provider’s outage notices or contact support.",
      "On Windows, use Settings → Network & internet to confirm Wi-Fi is on and the correct network is selected. Forget and reconnect only if you know the Wi-Fi password.",
      "If the issue continues, record when it happens and the device model before changing router security or network settings."
    ],
    caution: "Do not factory-reset a router unless you have the setup details and permission; this can disconnect every user."
  },
  {
    id: "printer-not-printing",
    title: "How to fix a printer that will not print",
    summary: "Check power, connection, paper, ink and print queue before reinstalling printer software.",
    steps: [
      "Confirm the printer is powered on and has no paper, ink, toner or error warning.",
      "Check the paper tray and remove visible jams using the printer’s instructions.",
      "Confirm the computer and printer are on the same Wi-Fi network, or reconnect the USB cable.",
      "In Windows, open Settings → Bluetooth & devices → Printers & scanners and make sure the intended printer is selected.",
      "Open the print queue and cancel only stuck jobs, then try a test page.",
      "If it still fails, download the exact driver from the printer manufacturer’s official support page."
    ],
    caution: "Do not force paper out against the printer’s direction or download drivers from third-party driver sites."
  },
  {
    id: "phone-storage",
    title: "How to free up phone storage without losing important files",
    summary: "Review large files and app downloads carefully before deleting anything.",
    steps: [
      "Check the phone’s built-in Storage screen to see what is using space.",
      "Review large videos, duplicate downloads and offline media before deleting.",
      "Confirm photos and documents are backed up and can be opened from the backup account before removing local copies.",
      "Clear an app’s cache only through the phone’s settings when available; avoid clearing app data unless you know what it removes.",
      "Remove apps you recognise and no longer need, then restart the phone.",
      "Keep enough free space for system updates and avoid unknown cleaner apps that request broad access."
    ],
    caution: "Cloud synchronisation may also delete files from the cloud when you delete them on the phone. Verify how your sync service works first."
  },
  {
    id: "phishing-message",
    title: "What to do if you receive a suspicious link or message",
    summary: "Pause, verify the sender independently and protect your accounts if you already clicked.",
    steps: [
      "Do not click the link, download an attachment or share a verification code.",
      "Contact the person or organisation through a phone number or website you already trust, not through the message.",
      "Report and block the message using the email, SMS, WhatsApp or social platform’s reporting option.",
      "If you clicked but entered no information, close the page and run an update and security scan.",
      "If you entered a password, change it from the official site using a trusted device, change reused passwords and enable multi-factor authentication.",
      "If payment or banking information was shared, contact your bank immediately using its official number."
    ],
    caution: "Never send passwords, one-time codes or banking PINs to someone who contacts you unexpectedly."
  },
  {
    id: "backup-files",
    title: "How to back up important files before repair or reset",
    summary: "Make a separate copy and verify it before changing or reinstalling a device.",
    steps: [
      "Identify important files in Desktop, Documents, Downloads, Pictures and any work folders.",
      "Copy them to a separate external drive or a trusted cloud account you control.",
      "Wait for the copy or upload to complete; do not unplug the drive during transfer.",
      "Open several files from the backup location to confirm the copy works.",
      "Keep at least one backup disconnected from the computer after copying, where practical.",
      "For business, school or shared devices, follow the organisation’s approved backup process."
    ],
    caution: "A synced folder is not always a separate backup. Do not reset, format or reinstall until you have checked the backup."
  }
];


const expandedCategories = [
  {
    title: "Computer Help",
    description: "Safe first steps for common Windows and laptop problems.",
    guides: [
      { id:"pc-wont-start",title:"Computer will not turn on",summary:"Check power and signs of life before opening a computer.",steps:["Check the wall outlet with another device and confirm the power cable is firmly connected.","For a laptop, connect its correct charger and leave it charging for a short while; check for a charging light.","Disconnect docks and nonessential USB accessories, then try once more.","If there is a burning smell, liquid damage, unusual heat or battery swelling, disconnect power if safe and stop.","Note any lights, beeps or error text and contact the manufacturer or a technician."] ,caution:"Do not open a power supply or swollen battery."},
      { id:"windows-blue-screen",title:"Windows blue screen or unexpected restart",summary:"Record the stop code and check recent changes before trying repairs.",steps:["Photograph or write down the stop code and when the error appears.","Disconnect recently added accessories and restart once.","If Windows starts, back up important files, install Windows updates and check whether the problem repeats.","Use Windows Recovery options if the PC cannot start; do not reset or reinstall before backing up where possible.","If crashes continue, seek help with the stop code and device model."] ,caution:"Avoid random driver downloads and registry edits."},
      { id:"windows-update",title:"Windows update is stuck or failing",summary:"Use low-risk checks before resetting Windows Update components.",steps:["Keep the PC on power and allow an update that is still progressing to finish.","Restart once, confirm date/time and internet, and check that the system drive has free space.","Open Settings → Windows Update and record the exact error code.","Run the built-in Windows Update troubleshooter if offered, then retry once.","If it fails repeatedly, use Microsoft Support or a technician; do not delete system folders."] ,caution:"Do not force power off during a firmware or BIOS update."},
      { id:"laptop-overheating",title:"Laptop overheating or fan running loudly",summary:"Improve airflow and check load without opening the device.",steps:["Place the laptop on a hard, flat surface and keep vents clear.","Close demanding apps you recognise; check Task Manager for sustained heavy usage.","Restart and install updates from Windows and the laptop maker.","If heat rises rapidly, the device shuts down, or a battery is swollen, power off and stop using it.","Arrange cleaning or repair if overheating continues."] ,caution:"Do not use liquids or insert objects into vents."},
      { id:"laptop-battery",title:"Laptop battery drains quickly",summary:"Check battery use, display and power settings before replacing hardware.",steps:["Open Settings → System → Power & battery and review battery usage by app.","Lower screen brightness, close unused apps and disconnect accessories you do not need.","Use a balanced or power-saving mode and install updates from official sources.","Check the manufacturer's battery-health utility if available.","If the battery is swollen, hot or damaged, stop using and charging the laptop and seek service."] ,caution:"Never puncture or press a swollen battery."},
      { id:"keyboard-touchpad",title:"Laptop keyboard or touchpad is not working",summary:"Separate a settings issue from a hardware fault.",steps:["Restart and check whether the issue occurs before Windows loads or only after sign-in.","Check for a keyboard/touchpad function-key toggle and confirm the touchpad is enabled in Settings.","Disconnect external keyboards or mice and test again.","Use an external keyboard/mouse temporarily; install updates only through Windows or the manufacturer.","If keys are sticky after a spill, power off and arrange repair."] ,caution:"Do not pour cleaner onto the keyboard."},
      { id:"no-sound",title:"No sound from speakers or headphones",summary:"Check output selection, volume and connections first.",steps:["Check volume and mute controls on Windows, the app and the speaker/headset.","Select the intended output device from the sound menu.","Reconnect Bluetooth or cable devices and test another app or audio file.","Restart, then use Windows' built-in audio troubleshooter if available.","Install audio drivers only from Windows Update or the device maker."]},
      { id:"external-monitor",title:"External monitor is not detected",summary:"Check monitor input and cable path before changing display settings.",steps:["Confirm the monitor is powered on and set to the correct input (HDMI, DisplayPort, USB-C).","Reconnect both ends of the cable and test a known working cable or port if available.","Press Windows + P and choose Duplicate or Extend.","Open Settings → System → Display and use Detect if shown.","Check whether the laptop's USB-C port supports video; not all USB-C ports do."]},
      { id:"deleted-files",title:"A file was accidentally deleted",summary:"Check recovery locations and avoid overwriting the drive.",steps:["Stop saving new files to the affected drive if the deleted file is important.","Check Recycle Bin, cloud trash, shared folders and version history.","Look for another backup or copy on a separate device.","For a business or managed computer, contact the administrator promptly.","If no backup exists and the file is critical, use a reputable recovery professional before installing recovery software."] ,caution:"Recovery is not guaranteed; continued use can overwrite deleted data."}
    ]
  },
  {
    title: "Internet & Networking",
    description: "Troubleshoot home connections without disrupting router settings.",
    guides: [
      { id:"slow-internet",title:"Slow internet troubleshooting",summary:"Find out if the problem is one device, Wi-Fi signal or the internet service.",steps:["Compare another device on the same connection and test near the router.","Pause large downloads or streaming temporarily and rerun the test using your provider's recommended method.","Restart the affected device; restart the router once if all devices are affected.","Check for service outages and note time, location in the home and test results.","Contact your internet provider with the results before changing router settings."]},
      { id:"wifi-coverage",title:"Improve home Wi-Fi coverage",summary:"Improve signal placement and reduce avoidable interference.",steps:["Place the router in an open, central, elevated location, away from cabinets and large metal objects.","Keep it away from heat, water and devices that may interfere with the signal.","Test connection in the rooms where you need it; note weak spots.","If using an extender or mesh system, follow its maker's setup and security instructions.","Use a strong unique Wi-Fi password and current router firmware."]},
      { id:"printer-wifi",title:"Connect a printer to Wi-Fi",summary:"Use the printer maker's setup flow and connect it to the right network.",steps:["Confirm the printer supports Wi-Fi and note the exact model.","Connect the computer or phone to the intended Wi-Fi network; many printers require 2.4 GHz during setup.","Use the printer's screen or the manufacturer's official setup app to select the network and enter its password.","Install the printer through Windows Settings or the manufacturer's official support page.","Print a test page and avoid sharing the Wi-Fi password with untrusted setup apps."]},
      { id:"router-restart-reset",title:"Router restart vs factory reset",summary:"A normal restart is different from a reset that erases configuration.",steps:["For a temporary connection issue, use the router's normal restart/power cycle instructions.","Wait for the router to reconnect fully before testing.","Do not press and hold the recessed Reset button for routine troubleshooting.","A factory reset may erase provider settings, Wi-Fi name/password and custom configuration.","Only factory-reset with permission and setup details, or with provider support."] ,caution:"A factory reset can disconnect every person and device using the network."},
      { id:"mobile-hotspot",title:"Set up a mobile hotspot",summary:"Share a phone's internet connection with a trusted device.",steps:["Check your mobile plan and data allowance; hotspot use may consume data quickly.","On Android or iPhone, open Settings and find Personal Hotspot or Hotspot & tethering.","Set a strong temporary password and share it only with the device you intend to connect.","Connect the laptop to the phone's hotspot Wi-Fi and turn hotspot off when finished.","Avoid sensitive activity on an unfamiliar or public connection."]},
      { id:"ethernet-wifi",title:"Ethernet vs Wi-Fi: which should I use?",summary:"Choose a connection based on stability, mobility and your setup.",steps:["Ethernet uses a cable and is often more consistent for fixed computers, gaming or video calls.","Wi-Fi offers mobility and is convenient for phones and laptops but signal depends on distance and obstacles.","The internet plan and router still limit speeds; a cable does not increase the subscribed service speed.","Use the router manufacturer's instructions and avoid running cables where people can trip."]},
      { id:"network-security",title:"Basic home network security",summary:"A short checklist for router and Wi-Fi protection.",steps:["Change default router administrator credentials using the maker's instructions.","Use WPA2-AES or WPA3 where supported and set a unique Wi-Fi password.","Install router firmware updates from the manufacturer or internet provider.","Disable remote administration and WPS if you do not need them and understand the setting.","Create a guest network for visitors or smart devices when available."]}
    ]
  },
  {
    title: "Phone & Mobile Help",
    description: "Android storage, backups, transfers and battery basics.",
    guides: [
      { id:"android-slow",title:"Android phone running slowly",summary:"Start with storage, updates and app use before installing cleaner apps.",steps:["Restart the phone and install Android and app updates from official settings or Play Store.","Check Settings → Storage and remove downloads or offline media you recognise and no longer need.","Review battery and memory usage by app; uninstall only apps you recognise and no longer use.","If one app causes trouble, update it or clear its cache through Settings; clearing app data may remove local information.","Avoid unknown cleaner or booster apps that request broad permissions."]},
      { id:"android-sd-card",title:"Move files to an SD card on Android",summary:"Free internal space while keeping a separate backup of important items.",steps:["Confirm your phone supports a compatible SD card and insert it according to the maker's instructions.","Use the Files app to move selected documents, photos or videos to the card.","Open a few moved files from the card to confirm they work.","Some apps cannot be moved, and formatting a card erases its contents.","Keep another backup of important files; an SD card can fail or be lost."]},
      { id:"android-ram",title:"Does clearing RAM make Android faster?",summary:"Understand what memory controls can and cannot fix.",steps:["Android manages memory automatically; routinely force-closing every app is usually unnecessary.","Restart if an app freezes or the phone behaves unusually.","Update the app or remove apps you no longer use if the slowdown is persistent.","Check storage space and battery use too; low storage or a misbehaving app can affect performance.","Do not install RAM booster apps that promise guaranteed speed."]},
      { id:"photo-backup",title:"Back up photos automatically",summary:"Choose a trusted account, check backup status and confirm storage limits.",steps:["Choose a trusted photo backup service and sign in to the account you control.","Enable backup in that app's settings and choose whether uploads use Wi-Fi only or mobile data too.","Keep the app open or connected as required and check that the backup status says complete.","Confirm photos are visible from the service's website or another device before deleting local copies.","Review storage limits and account recovery options."]},
      { id:"phone-transfer",title:"Transfer data to a new phone",summary:"Use the official transfer tool for your device brands.",steps:["Back up the old phone and charge both phones before starting.","Use the manufacturer's or operating system's built-in transfer tool during new-phone setup.","Keep both devices connected and nearby until transfer completes.","Check contacts, photos, messages and authenticator access on the new phone before wiping the old one.","Move your SIM/eSIM using your carrier's instructions; do not share verification codes."]},
      { id:"deleted-photos",title:"Recover accidentally deleted phone photos",summary:"Check the app's Recently Deleted or Trash folder and cloud backup.",steps:["Open the photo app's Recently Deleted, Trash or Bin folder and restore the item if present.","Check the cloud photo account and its trash on the service's official app or website.","Ask whether another shared device or person has a copy.","Avoid installing recovery apps from unknown sources or continuing to record large files if the photo is critical.","For important evidence or irreplaceable images, seek reputable specialist help; recovery may not be possible."]},
      { id:"phone-malware",title:"Reduce malware risk on Android",summary:"Use official app sources, updates and permission reviews.",steps:["Install Android and security updates when available.","Install apps through Google Play or the device manufacturer's official store and review the developer.","Remove apps you do not recognise and review app permissions in Settings.","Keep Play Protect enabled if available and avoid tapping security alerts in unsolicited messages.","If you entered account credentials into a suspicious app or page, change them from a trusted device and enable MFA."]},
      { id:"phone-battery",title:"Make a phone battery last longer",summary:"Adjust display, background activity and connectivity settings.",steps:["Lower screen brightness or use automatic brightness and a shorter screen timeout.","Check battery usage to identify apps using unusually high power.","Use Battery Saver when needed and limit background activity for apps you rarely use.","Turn off Bluetooth, location or hotspot when not needed, while keeping essential safety functions on.","If the phone becomes unusually hot, swells or the battery drains suddenly after damage, stop charging and seek service."]}
    ]
  },
  {
    title: "Cybersecurity & Safety",
    description: "Practical account and scam protection for everyday users.",
    guides: [
      { id:"phishing-email",title:"How to identify a phishing email",summary:"Check the message independently before opening links or attachments.",steps:["Look for unexpected urgency, unusual payment requests, threats or requests for codes.","Check the full sender address and inspect links without opening them; a familiar display name can be spoofed.","Contact the organisation using a number or website you already know.","Report phishing through your email provider and delete the message.","If you entered a password, change it on the official site and enable MFA."]},
      { id:"strong-passwords",title:"Create strong, unique passwords",summary:"Use a different long password for each important account.",steps:["Make passwords long and unique; avoid names, birthdays and predictable variations.","Use a reputable password manager if you can protect its master account and recovery method.","Turn on multi-factor authentication for email, financial and social accounts.","Never share one-time codes or passwords in response to an unexpected call or message.","Change a password immediately if you shared it or suspect it has been exposed."]},
      { id:"password-manager",title:"Use a password manager safely",summary:"Store credentials in a trusted vault and secure the vault itself.",steps:["Choose a reputable manager from its official website or app store and enable MFA if available.","Create a strong master password you do not reuse elsewhere.","Save recovery codes securely offline and confirm you can access the vault on a second trusted device.","Do not share the vault or export passwords to an unprotected file.","Beware of fake apps and extensions with similar names."]},
      { id:"two-factor",title:"Turn on two-step verification (2FA)",summary:"Add a second check to your important accounts.",steps:["Open the account's official security settings directly, not through a message link.","Choose an authenticator app, passkey or security key if offered; SMS is better than no second step but may be less secure.","Save recovery codes somewhere secure and offline.","Add a backup sign-in method and check it works before changing phones.","Never approve a sign-in prompt you did not initiate."]},
      { id:"online-shopping",title:"Shop online more safely",summary:"Check the seller, payment method and delivery terms before paying.",steps:["Use the seller's official website and check contact, return and delivery details.","Be cautious of prices that are implausibly low or pressure to pay immediately.","Use a payment method with a clear dispute process; avoid sending PINs or one-time codes.","Check the exact website address and look for independent seller information.","Save order confirmations and contact your bank quickly if you suspect fraud."]},
      { id:"whatsapp-security",title:"Protect a WhatsApp account",summary:"Secure registration, linked devices and recovery details.",steps:["Enable two-step verification and add an email address you control if the app offers it.","Never share the SMS registration code or two-step PIN, even with someone claiming to be support.","Review Linked devices and log out any device you do not recognise.","Set a device lock and keep WhatsApp updated through the official app store.","If you lose access, use WhatsApp's official account recovery guidance and warn contacts through another channel."]},
      { id:"ghana-scams",title:"Recognise common online scam warning signs in Ghana",summary:"Verify requests for money, mobile money, jobs and official services independently.",steps:["Pause when a message promises guaranteed returns, urgent fees, prizes or a job offer requiring payment.","Verify mobile money requests by calling the person on a number you already know; names and screenshots can be misleading.","Use official organisation websites and contact numbers for government, school, bank and delivery claims.","Never share a mobile money PIN, bank PIN, password or one-time code.","Keep transaction evidence and report suspected fraud to your provider and relevant authorities."]},
      { id:"social-security",title:"Social media account security checklist",summary:"Protect sign-in, recovery and public information.",steps:["Use a unique password and enable MFA.","Review logged-in devices, recovery email and phone number.","Set profile and post visibility intentionally; remove personal details that help impersonation.","Check connected apps and remove ones you no longer use.","Tell contacts through another channel if your account sends messages you did not write."]},
      { id:"hacked-account",title:"What to do if an account is hacked",summary:"Secure recovery email first, then change passwords and revoke unfamiliar sessions.",steps:["Use a trusted device and go to the provider's official account recovery page.","Secure the recovery email and phone account, then change the compromised password and any reused passwords.","Sign out unfamiliar sessions, revoke suspicious app access and enable MFA.","Contact your bank immediately if financial details or transactions are involved.","Warn contacts not to follow suspicious messages and preserve evidence of the incident."] ,caution:"For work or school accounts, contact the organisation's administrator promptly."}
    ]
  },
  {
    title: "Microsoft Office Help",
    description: "Document, spreadsheet, presentation and cloud-file first steps.",
    guides: [
      { id:"word-formatting",title:"Fix common Microsoft Word formatting problems",summary:"Reveal formatting marks and use styles instead of repeated spaces.",steps:["Save a copy before making large changes.","Use Home → ¶ to reveal paragraph marks, spaces and page breaks.","Use Styles for headings and lists; use paragraph spacing and page-break controls instead of repeated Enter presses.","Use Layout settings for margins, orientation and paper size.","If only one document is affected, copy its text into a new document without formatting as a last resort."]},
      { id:"excel-beginners",title:"Excel basics: enter, sort and total data",summary:"Keep simple tables accurate and easier to analyse.",steps:["Use one header row and keep one type of information in each column.","Select the data and use Insert → Table so headers and filters are available.","Use a formula such as =SUM(B2:B10) for a total and check the range before relying on it.","Sort the entire table, not a single column, to keep each row's data together.","Keep an untouched copy of important source data."]},
      { id:"professional-documents",title:"Create a professional Word document",summary:"Use consistent page setup, styles and a final proofread.",steps:["Set page size, margins and orientation before laying out the document.","Use a small set of readable fonts and consistent heading styles.","Use tables for aligned information rather than spaces; check page breaks and headers/footers.","Run spelling and accessibility checks where available.","Export a PDF and inspect it before printing or sending."]},
      { id:"pdf-conversion",title:"Convert a document to PDF",summary:"Use built-in export tools and inspect the final file.",steps:["In Word, Excel or PowerPoint, use File → Save As or Export → PDF.","Review page range, paper size and scaling before saving.","Open the exported PDF to check fonts, images, page breaks and links.","Use a trusted desktop tool for sensitive files; avoid uploading confidential documents to unknown converters.","Keep the editable original if you may need to make changes later."]},
      { id:"powerpoint-tips",title:"Make a clear PowerPoint presentation",summary:"Use one main message per slide and test readability.",steps:["Start with the audience and the one idea each slide should communicate.","Use a consistent theme, readable type and strong contrast.","Prefer concise labels and meaningful visuals over dense paragraphs.","Add alt text to important images and check reading order when possible.","Run the slideshow on the presentation device and check video, fonts and links."]},
      { id:"unsaved-office",title:"Recover an unsaved Office document",summary:"Check the app's recovery pane and official recovery locations.",steps:["Reopen the Office app and look for Document Recovery or Recover Unsaved Documents.","Use the app's File → Info or File → Open recovery options if shown.","Check OneDrive or SharePoint version history if the file was stored there.","Save any recovered copy under a new name immediately and inspect its contents.","If the file is business-critical, stop making repeated changes and ask IT support."] ,links:[{label:"Microsoft: Recover Word files",url:"https://support.microsoft.com/en-gb/word/recover-your-word-files-and-documents"}]},
      { id:"onedrive-backup",title:"Use OneDrive to back up files",summary:"Understand sync, backup and version history before deleting local files.",steps:["Sign in to the OneDrive account you control and confirm sync is complete.","Choose folders for backup in OneDrive settings and review the storage allowance.","Open the OneDrive website from another device and confirm key files are present.","Use version history or recycle bin for recovery when supported.","Remember that sync can mirror deletions; keep a separate backup for important files."]}
    ]
  },
  {
    title: "Printing & Business Documents",
    description: "Prepare files carefully before sending them to a printer or client.",
    guides: [
      { id:"print-preparation",title:"Prepare a file for printing",summary:"Check page size, margins, colour, images and proof before print.",steps:["Confirm the required paper size and orientation with the print provider.","Export to PDF and inspect every page at normal size.","Check spelling, page numbers, margins, image resolution and whether content is cut off.","Use the printer's requested colour and bleed settings; ask before adding bleed or crop marks.","Print one proof copy before producing a large quantity."]},
      { id:"pdf-print-settings",title:"Choose PDF print settings",summary:"Match scaling, paper and colour settings to the document.",steps:["Open the PDF and select the correct printer and paper size.","Choose Actual size when dimensions must remain exact; use Fit only when scaling is acceptable.","Check portrait/landscape, single/double-sided, colour/grayscale and page range.","Use a test page for forms or measured layouts.","Confirm the paper tray and finish before printing many copies."]},
      { id:"colour-printing",title:"Colour vs black-and-white printing",summary:"Choose colour only where it improves clarity or is required.",steps:["Use colour for logos, charts, photos and content where colour carries meaning.","Use grayscale for text documents when colour is unnecessary and cost matters.","Check that contrast remains clear in grayscale before choosing black-and-white.","Ask the print provider about paper, coverage and finishing for large jobs.","Review a proof because on-screen colours can differ from printed output."]},
      { id:"paper-sizes",title:"A4, A3 and other paper sizes explained",summary:"Choose the exact page dimensions before designing or printing.",steps:["A4 is 210 × 297 mm and is common for letters and reports.","A3 is 297 × 420 mm, twice the area of A4; it suits larger diagrams and posters.","Select paper size in the document layout and export settings, not only in the printer dialog.","Do not stretch a design between sizes without checking font size and image quality.","Ask the print provider about custom sizes and bleed before final export."]},
      { id:"receipt-invoice",title:"What to include in a receipt or invoice",summary:"Make transaction records clear and easy to reconcile.",steps:["Identify the business and include a unique document number and date.","Record the customer, item or service, quantities, amounts, taxes or discounts where applicable, and total.","For receipts, state amount paid, payment method and reference when relevant; distinguish receipts from invoices requesting payment.","Keep a copy and use consistent numbering; do not reuse document numbers.","Confirm local tax and recordkeeping requirements with an appropriate adviser."]},
      { id:"letterhead",title:"Set up a clean business letterhead",summary:"Use accurate company details and reserve enough space for the message.",steps:["Use the approved logo and registered business name exactly as provided.","Include verified contact details, website and address; do not invent registration or tax numbers.","Keep the header compact and the body area generous for letters and proposals.","Use consistent colours, typography and footer information.","Export a PDF and print a proof to check legibility and margins."]},
      { id:"business-card",title:"Prepare a business card for print",summary:"Check trim size, safe area and readable contact details.",steps:["Confirm the printer's finished size, bleed and file format before designing.","Keep names, phone numbers, email and QR codes inside the safe area.","Use readable type and high-resolution logos; test QR codes from a printed proof.","Check both sides, spelling, country code and website address.","Approve a proof before ordering a larger run."]}
    ]
  }
  ,
  {
    title: "Small Business Technology",
    description: "Practical foundations for small businesses, churches, schools and community organisations.",
    guides: [
      {id:"business-laptop",title:"Choosing a business laptop",summary:"Match the device to the work, support life and budget.",steps:["List the daily tasks and required software before comparing models.","Check current software requirements, warranty, repair access, ports and battery life.","Prefer a supported operating system, SSD storage and enough memory for the workload.","Buy from a reputable seller, confirm the licence and keep the receipt.","Back up business data and set up protected user accounts."]},
      {id:"business-email",title:"Set up a professional business email",summary:"Use a domain the business controls and protect account access.",steps:["Register a domain through a reputable registrar using business-controlled recovery details.","Choose an email provider and follow its official domain verification and DNS setup steps.","Create named staff accounts and role addresses only where useful.","Enable MFA, recovery options and billing reminders.","Use the provider's SPF, DKIM and DMARC instructions and test delivery."]},
      {id:"microsoft-365-sme",title:"Microsoft 365 for a small business",summary:"Compare current plans and set up a business-owned tenant.",steps:["List whether you need business email, Office apps, cloud storage, meetings and admin controls.","Compare current features, terms and prices on Microsoft's official site.","Use a business-controlled tenant and protected administrator account.","Set MFA, recovery admins, staff accounts and an offboarding process.","Plan backup and access controls; sync is not always a separate backup."]},
      {id:"free-startup-software",title:"Free software for startups",summary:"Check licensing, privacy and export options before adopting a tool.",steps:["Define the task and minimum features you need.","Download only from an official vendor site or reputable open-source project.","Check whether commercial use is allowed, what data is collected and how you can export it.","Use individual accounts, MFA and least-privilege access.","Keep an inventory and a replacement plan if the tool changes."]},
      {id:"digital-records",title:"Organise digital business records",summary:"Use clear file names, controlled access and tested backups.",steps:["Choose a business-controlled storage location and responsible owner.","Create a simple folder structure and consistent file naming by subject and date.","Separate approved records from drafts and limit access to those who need it.","Remove access promptly when staff roles change.","Back up important records separately and test restoring a file."]},
      {id:"protect-business-data",title:"Protect small-business data",summary:"Start with account security, updates, backups and staff habits.",steps:["Enable MFA on email, banking, cloud and administrator accounts.","Use separate accounts and remove access when someone leaves.","Keep devices, software and router firmware updated from official sources.","Back up important data and test restoration; keep a copy inaccessible from everyday devices.","Verify payment-detail changes or urgent requests through a second trusted channel."]},
      {id:"basic-office-network",title:"Basic office networking",summary:"Plan connectivity, secure Wi-Fi and document recovery access.",steps:["List users, rooms, devices and business-critical systems.","Use supported router/access-point equipment suited to the space.","Change default admin credentials, use WPA2/WPA3 and update firmware.","Set up a guest network where available and avoid exposing admin access publicly.","Label equipment and record the provider's support and recovery details securely."]}
    ]
  },
  {
    title: "Website & Digital Presence",
    description: "Plain-language guides to domains, hosting, business listings, SEO and website security.",
    guides: [
      {id:"choose-domain",title:"Choosing a business domain name",summary:"Choose a clear web address the business can own and renew.",steps:["Pick a short, easy-to-spell name that fits the business.","Check availability with a reputable registrar and consider naming conflicts.","Register it in a business-controlled account with current recovery details.","Enable renewal reminders and keep payment information current.","Protect the registrar account with MFA and never share its password."]},
      {id:"website-hosting",title:"What website hosting means",summary:"Understand how a domain, hosting provider and website platform work together.",steps:["A domain is the address; hosting or a website platform stores and serves the site.","Compare security, backups, support, uptime, SSL, renewal cost and export options.","Keep domain ownership accessible to the business even if a designer manages the site.","Use HTTPS and secure administrator accounts with MFA.","Keep an independent backup and know how to restore or move the site."]},
      {id:"professional-email-domain",title:"Email using your own domain",summary:"Configure provider records carefully and secure account access.",steps:["Choose a domain and an email provider you trust.","Follow the provider's official verification and MX-record instructions.","Add SPF, DKIM and DMARC records only using the provider's exact guidance.","Enable MFA and document who owns renewal and administration.","Test sending and receiving from different providers."]},
      {id:"google-business-profile",title:"Set up or claim a Google Business Profile",summary:"Create one accurate listing only if the business is eligible.",steps:["Review Google's eligibility rules and search Maps for an existing profile first.","Claim an existing listing instead of creating a duplicate.","Enter accurate business details; do not use a false address or keyword-stuffed name.","Complete Google's verification process and keep hours/contact details current.","Ignore unsolicited offers that promise guaranteed rankings or demand payment to verify."] ,links:[{label:"Google: Add or claim a Business Profile",url:"https://support.google.com/business/answer/2911778"}]},
      {id:"basic-seo",title:"Basic SEO for a small business website",summary:"Make useful pages clear to people and search engines.",steps:["Give each important page a clear title, helpful description and descriptive heading.","Answer customer questions with useful, original content and accurate business details.","Make pages mobile-friendly, accessible, fast and easy to navigate.","Publish a sitemap and verify the domain in Google Search Console.","Request indexing for important pages; search visibility and rankings are not guaranteed."]},
      {id:"website-security",title:"Website security basics",summary:"Protect your domain, administrator accounts, site and visitor information.",steps:["Use HTTPS and renew the domain on time.","Protect registrar, hosting and admin accounts with unique passwords and MFA.","Update the site platform, themes and plugins from trusted sources.","Keep tested backups outside the hosting account and remove unused admin accounts.","Collect only needed visitor data and publish an accurate privacy notice."]}
    ]
  },
  {
    title: "Student Resources",
    description: "Tools and habits for coursework, research, documents and presentations.",
    guides: [
      {id:"student-free-software",title:"Free software for students",summary:"Find legitimate education access and safe no-cost alternatives.",steps:["Check your institution's software portal first.","Use official education pages or reputable open-source projects.","Check device requirements, licence terms and renewal dates.","Avoid cracked software and activation scripts; they can contain malware.","Back up coursework before major installations."]},
      {id:"organise-onedrive",title:"Organise assignments with OneDrive",summary:"Keep coursework findable and check that cloud copies actually synced.",steps:["Create a folder for each course and use consistent assignment names.","Wait for sync to finish and confirm key files on OneDrive web.","Use version history where available and keep a separate backup of critical work.","Share with named people using the least access needed.","Follow your institution's rules for research or personal data."]},
      {id:"word-assignment-format",title:"Format a Word assignment",summary:"Set layout, headings and references before final proofreading.",steps:["Check the rubric and required citation style.","Set paper size, margins, spacing and page numbering.","Use built-in heading styles and tables instead of repeated spaces.","Proofread citations, spelling and page breaks.","Export a PDF and inspect it before submission."]},
      {id:"research-safety",title:"Research online safely",summary:"Check credibility, citations and suspicious downloads.",steps:["Start with library databases, government sources, academic publishers and known institutions.","Check author, date, evidence and purpose; cross-check important claims.","Cite sources and separate quotations, paraphrases and your own analysis.","Download files only from sources you trust.","Do not submit personal data to sites that are not needed for your research."]},
      {id:"presentation-skills",title:"Prepare a clear presentation",summary:"Make slides readable, source visuals and practise timing.",steps:["Define the audience and main message before designing.","Use one main idea per slide, readable text and strong contrast.","Cite data and image sources and add alternative text where possible.","Practise aloud with a timer and prepare a PDF backup.","Test the presentation on the device and check media and links."]}
    ]
  },
  {
    title: "Emergency Guides",
    description: "Urgent first actions for water damage, ransomware, account loss and stolen devices.",
    guides: [
      {id:"laptop-wet",title:"Laptop got wet",summary:"Reduce electrical and data risks; do not power it up to test.",steps:["Disconnect the charger and accessories if safe.","Power off normally if it is on; do not keep pressing keys or restart it.","Blot the outside gently. Do not use heat, rice or compressed air.","Keep it off and arrange professional inspection, especially after sugary or salty liquid.","Tell the repair provider if preserving files is important."],caution:"Do not charge or turn on a wet laptop."},
      {id:"phone-wet",title:"Phone dropped in water",summary:"Unplug it, dry the outside and follow the maker's liquid guidance.",steps:["Disconnect cables and accessories; power off if safe.","Wipe the exterior with a soft dry cloth and leave it in a dry, ventilated place.","Do not charge it, use a hair dryer, insert objects into ports or put it in rice.","Follow the manufacturer's guidance and seek service if it was submerged or behaves unusually.","If hot, swollen or smoking, move away and seek appropriate emergency help."],caution:"Do not charge until fully dry and the manufacturer says it is safe.",links:[{label:"Apple: Important handling information",url:"https://support.apple.com/guide/iphone/important-handling-information-iphbbe12ba1/ios"}]},
      {id:"suspected-ransomware",title:"Suspected ransomware: immediate steps",summary:"Contain the device and preserve evidence; avoid improvised recovery actions.",steps:["Disconnect the affected device from Wi-Fi and wired networks if safe; do not connect backup drives.","Do not pay, delete files, run random decryptors or reinstall before getting incident advice.","Use a separate clean device to alert the organisation's IT administrator and preserve messages and timing details.","Change exposed credentials from a trusted device, prioritising email and administrator accounts.","Restore only from verified clean backups after the system is assessed."],caution:"Notify your work, school or business system administrator immediately."},
      {id:"microsoft-account-recovery",title:"Recover a Microsoft account",summary:"Use Microsoft's official recovery flow and secure recovery methods.",steps:["Go directly to Microsoft's recovery page from a trusted device.","Use an email or phone number you control and provide accurate account information.","After recovery, change the password, enable MFA and remove unknown sessions or recovery methods.","Secure the recovery email account too.","Never pay strangers or share verification codes for account recovery."],links:[{label:"Microsoft account recovery",url:"https://account.live.com/acsr"}]},
      {id:"stolen-phone",title:"Stolen phone checklist",summary:"Secure device access, SIM, payment apps and personal accounts quickly.",steps:["Use Apple's or Google's official device-finding service to lock or mark it lost; do not confront a suspected thief.","Contact your mobile carrier to block the SIM or move your number to a replacement SIM.","Change email and financial passwords from a trusted device and revoke lost-device sessions.","Contact your bank or mobile-money provider if payment apps or SIM access may be exposed.","Report the theft and keep the phone IMEI or serial number if available."]},
      {id:"stolen-whatsapp",title:"Stolen WhatsApp account recovery",summary:"Try to register your number again and alert contacts through another channel.",steps:["Register your number again in the official WhatsApp app and enter the SMS code yourself; never share it.","If an unfamiliar two-step PIN is requested, follow the app's official recovery instructions.","Contact your carrier if you suspect a SIM swap or loss of number control.","Warn contacts through another channel to ignore money or verification-code requests.","After regaining access, enable two-step verification and review Linked devices."]}
    ]
  }

  ,
  {
    title: "Engineering Resources",
    description: "Safety-first starting points for energy and electrical topics. These guides do not replace a certified electrician or qualified engineer.",
    guides: [
      {id:"home-electrical-safety",title:"Home electrical safety basics",summary:"Recognise warning signs and know when to call a certified professional.",difficulty:"Beginner · professional work required",steps:["Do not touch exposed wires, damaged outlets, wet electrical equipment or sparking devices.","If there is smoke, sparks or a burning smell, keep people away and disconnect power only if it is safe to do so.","Do not overload sockets or use damaged extension cords.","Use a qualified, appropriately certified electrician for wiring, repairs, breaker changes or installations.","Keep children away from electrical equipment and follow the manufacturer's instructions."],caution:"This is safety awareness only. Do not attempt electrical wiring or repair from an online guide.",links:[{label:"Ghana Energy Commission: Electrical Wiring Regulations",url:"https://www.energycom.gov.gh/index.php/regulation/electricity-transmission-and-distribution?download=24%3Aelectrical-wiring-regulations-2011-l-i-2008"}]},
      {id:"solar-basics",title:"Solar power basics for homes and small businesses",summary:"Understand the parts of a solar system before requesting an assessment.",steps:["List the equipment and approximate daily use you want the system to support.","Ask a qualified installer to assess roof condition, shading, wiring, batteries, protection and local conditions.","Request a written design showing expected output, storage, warranty, maintenance and limitations.","Compare installer credentials and references; confirm who handles permits and inspections where required.","Never connect a solar system to building wiring or the grid yourself."],caution:"Solar systems can involve lethal DC and AC voltages. Installation and electrical work must be done by qualified professionals."},
      {id:"generator-safety",title:"Generator safety and basic maintenance planning",summary:"Use the manufacturer manual and prevent carbon monoxide, fire and electrical hazards.",steps:["Operate generators outdoors, far from doors, windows and vents; never run one indoors or in an enclosed area.","Follow the model's manual for inspection, fuel, oil, ventilation and maintenance intervals.","Allow the unit to cool before refuelling and store fuel in approved containers away from heat.","Use suitable outdoor-rated cables and have transfer connections installed by a qualified electrician.","Keep a maintenance log and stop using the unit if it leaks fuel, sparks or behaves abnormally."],caution:"Carbon monoxide can be fatal and has no smell. Never connect a generator directly to a wall outlet."},
      {id:"safe-wiring-practices",title:"Electrical wiring: what homeowners should know",summary:"A safe guide to planning and hiring; it intentionally does not provide DIY wiring steps.",steps:["Write down the problem or planned work and take photos from a safe distance.","Ask for a certified electrician and confirm the scope, materials, testing and documentation in writing.","Do not remove covers, touch conductors, bypass protective devices or work on live circuits.","Ask the professional to explain isolation, testing and any required inspection or certification.","Keep invoices and equipment information for future maintenance."],caution:"Electrical installation work must be completed by an appropriately certified professional."},
      {id:"energy-efficiency",title:"Simple energy-efficiency checks",summary:"Find common energy waste without opening electrical equipment.",steps:["Switch off lights and equipment when not needed, while preserving essential safety and security systems.","Use efficient lighting and appliances when replacing equipment; compare rated energy use.","Improve shade and ventilation where practical to reduce cooling demand.","Check appliance seals, settings and maintenance instructions.","For wiring, power quality, unusual heat or repeated breaker trips, contact a qualified electrician."],caution:"Do not open electrical panels or bypass a breaker to reduce energy use."}
    ]
  },
  {
    title: "Business Growth Resources",
    description: "Practical starting frameworks for planning, branding, documentation, proposals, tenders and customer service.",
    guides: [
      {id:"business-plan-outline",title:"Create a simple business plan outline",summary:"Describe the customer, offer, costs and next steps before investing.",steps:["Define the customer problem and who experiences it.","Describe the product or service, how it is delivered and what makes it useful.","Estimate one-time setup costs, ongoing costs, pricing assumptions and cash needs.","Choose practical marketing and sales channels and a way to track enquiries.","List risks, assumptions and the next small test that would validate the idea."]},
      {id:"brand-basics",title:"Branding basics for a small business",summary:"Build a consistent identity around a clear promise and accurate contact details.",steps:["Write one sentence explaining who you serve and what problem you solve.","Choose a business name and check availability and potential conflicts before investing in identity materials.","Select a small, consistent colour and type system that remains readable in print and on mobile.","Use the same approved logo, name and contact details across documents and online profiles.","Ask customers for genuine feedback and permission before publishing testimonials or photos."]},
      {id:"business-documentation",title:"Organise business documents and records",summary:"Keep approved versions clear, secure and easy to retrieve.",steps:["Create a simple folder structure for finance, clients, staff, operations and policies.","Use file names with subject, date and version; mark approved copies clearly.","Restrict access to sensitive information and review sharing links regularly.","Keep a record of approvals and changes for important documents.","Back up records securely and check how to restore them."]},
      {id:"proposal-writing",title:"Write a clear business proposal",summary:"Connect the client's need to scope, deliverables, timing and price.",steps:["Restate the client's problem and desired outcome in plain language.","Define what is included, excluded, and what the client must provide.","List deliverables, milestones, assumptions, timeline and review process.","Present costs and payment terms clearly, including any optional items.","Add a validity period and a clear acceptance/contact step; avoid promising results you cannot control."]},
      {id:"tender-readiness",title:"Prepare a tender response checklist",summary:"Use the tender's official instructions as the controlling source.",steps:["Download the current tender documents only from the issuing organisation's official source.","Record the deadline, submission method, required forms, eligibility rules and clarification process.","Create a compliance matrix and assign each requirement to a responsible person.","Check pricing, signatures, attachments, file naming and submission format against the instructions.","Submit early enough to confirm receipt and retain evidence of submission."],caution:"Tender rules and deadlines differ. The official tender documents control; do not rely on a generic guide.",links:[{label:"Ghana Public Procurement Authority: Standard Tender Documents",url:"https://ppa.gov.gh/online-documents/standard-tender-documents-revised/"}]},
      {id:"customer-service-basics",title:"Customer service basics for a small business",summary:"Respond clearly, set expectations and close the loop.",steps:["Acknowledge the enquiry and confirm what the customer needs.","Ask only the questions needed to understand the request and avoid collecting unnecessary sensitive details.","Explain the next action, expected response time and any information the customer should prepare.","Keep a record of agreed scope, dates, payments and follow-up actions.","After delivery, ask whether the issue is resolved and record genuine feedback with permission."]}
    ]
  }

];

function GuideCard({ guide, relatedGuides, onRelatedSelect }) {
  const wordCount = [guide.title, guide.summary, guide.caution, ...(guide.steps || [])].filter(Boolean).join(" ").split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 180));
  const difficulty = guide.difficulty || (guide.steps.length >= 6 ? "Intermediate" : "Beginner");
  const difficultyClass = difficulty.startsWith("Advanced")
    ? "bg-red-50 text-red-800 dark:bg-red-500/10 dark:text-red-200"
    : difficulty.startsWith("Intermediate")
      ? "bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200"
      : "bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200";
  return <article id={guide.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
    <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 dark:bg-white/10 dark:text-slate-200">Reading time: about {readingMinutes} min</span><span className={`rounded-full px-3 py-1.5 ${difficultyClass}`}>Difficulty: {difficulty}</span></div>
    <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{guide.title}</h2>
    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{guide.summary}</p>
    <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
    <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100"><strong>Safety note:</strong> {guide.caution || "Stop if a step could erase important data, expose an account or put safety at risk."}</p>
    {guide.links?.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900 dark:text-blue-300">{link.label} <ExternalLink size={16}/></a>)}
    {relatedGuides?.length > 0 && <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10"><h3 className="font-bold text-slate-950 dark:text-white">Related guides</h3><div className="mt-3 flex flex-wrap gap-2">{relatedGuides.map((related) => <button key={related.id} type="button" onClick={() => onRelatedSelect(related)} className="rounded-full border border-blue-200 px-3 py-2 text-left text-sm font-semibold text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-blue-500/30 dark:text-blue-200 dark:hover:bg-blue-500/10">{related.title}</button>)}</div></div>}
    <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-500/20 dark:bg-blue-500/10"><h3 className="font-bold text-slate-950 dark:text-white">Need professional help?</h3><p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">If these steps do not solve it, Eragonova can assist with remote troubleshooting, device setup, Windows installation, printer configuration, network support and business technology advice.</p><div className="mt-4 flex flex-wrap gap-3 text-sm font-bold"><a href="https://wa.me/233505374537" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline dark:text-blue-200">WhatsApp Eragonova</a><a href="mailto:eragonovaenterprise@gmail.com" className="text-blue-800 underline dark:text-blue-200">Email us</a><a href="/contact/" className="text-blue-800 underline dark:text-blue-200">Start a project</a></div><a href="/academy/" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-800 underline dark:text-blue-200">Learn related skills at Eragonova Academy <ArrowRight size={16}/></a></div>
  </article>;
}

const printableChecklists = [
  { title: "New PC setup checklist", items: ["Install operating system and security updates from official sources.", "Set a strong sign-in method and enable device encryption where supported.", "Install only required applications from trusted publishers.", "Set up separate user accounts and MFA for important services.", "Back up important files and test opening the backup.", "Record device model, warranty and support contact securely."] },
  { title: "Printer troubleshooting checklist", items: ["Check power, paper, ink or toner and error lights.", "Confirm the correct printer and queue are selected.", "Check cable or Wi-Fi connection and same network.", "Clear a stuck job and print one test page.", "Get drivers only from the printer maker's official support page.", "Record model and error message if escalation is needed."] },
  { title: "Website launch checklist", items: ["Check spelling, contact details, page links and mobile layout.", "Confirm domain ownership, renewal reminders and HTTPS.", "Test forms and confirm privacy wording matches what the site collects.", "Set page titles and descriptions and publish a sitemap.", "Verify the site in Google Search Console and submit the sitemap.", "Keep a backup and confirm who can update the site."] },
  { title: "Small business IT checklist", items: ["Assign an owner for each business account and device.", "Use unique passwords and MFA for email, banking and administrator access.", "Update operating systems, applications and router firmware.", "Back up important records separately and test restoring one file.", "Remove access when staff roles change and review sharing permissions.", "Verify payment changes through a second trusted channel."] },
  { title: "Data backup checklist", items: ["List the files and systems that would be difficult to replace.", "Choose a separate backup destination or trusted backup service.", "Run the backup and wait for it to complete.", "Open sample files from the backup to verify them.", "Keep at least one backup separate from everyday device access.", "Repeat on a schedule and after important changes."] },
  { title: "Cybersecurity checklist", items: ["Enable MFA on email, financial, social and admin accounts.", "Use unique passwords stored in a trusted password manager.", "Install updates from official sources.", "Review account recovery methods and logged-in devices.", "Verify unexpected requests independently before paying or sharing codes.", "Keep tested backups and know who to contact after an incident."] }
];

function escapePrintText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function printChecklist(checklist) {
  const printWindow = window.open("", "_blank", "width=820,height=900");
  if (!printWindow) {
    window.alert("Please allow the new tab to open, then choose Print or Save as PDF.");
    return;
  }
  const items = checklist.items.map((item) => "<li><span class='box'></span>" + escapePrintText(item) + "</li>").join("");
  printWindow.document.open();
  printWindow.document.write("<!doctype html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>" + escapePrintText(checklist.title) + " | Eragonova</title><style>body{font:16px/1.55 Arial,sans-serif;color:#172033;max-width:760px;margin:40px auto;padding:0 24px}header{border-bottom:3px solid #2563eb;padding-bottom:16px;margin-bottom:24px}h1{font-size:26px;margin:0 0 5px}header p{margin:0;color:#475569}ol{list-style:none;padding:0}li{display:flex;gap:12px;align-items:flex-start;padding:13px 0;border-bottom:1px solid #dbe2ea}.box{width:17px;height:17px;border:1.5px solid #475569;flex:0 0 17px;margin-top:3px}.foot{margin-top:30px;color:#64748b;font-size:12px}@media print{body{margin:15mm auto;padding:0}button{display:none}}</style></head><body><header><h1>" + escapePrintText(checklist.title) + "</h1><p>Free visitor resource · Eragonova Enterprise · eragonova.com</p></header><ol>" + items + "</ol><p class='foot'>Practical Technology. Reliable Infrastructure. Sustainable Growth.</p><script>window.onload=function(){setTimeout(function(){window.print()},250)}<\/script></body></html>");
  printWindow.document.close();
}

export default function DigitalHelpPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { title: "Quick technology health checks", description: "Twelve safe first checks for common device, file, update and account problems.", guides: helpGuides },
    ...expandedCategories,
  ];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredCategories = useMemo(() => categories
    .filter((category) => selectedCategory === "all" || category.title === selectedCategory)
    .map((category) => ({
      ...category,
      guides: category.guides.filter((guide) => {
        if (!normalizedQuery) return true;
        const searchable = [guide.title, guide.summary, guide.caution, ...(guide.steps || []), ...(guide.links || []).map((link) => link.label)]
          .filter(Boolean).join(" ").toLocaleLowerCase();
        return searchable.includes(normalizedQuery);
      }),
    }))
    .filter((category) => category.guides.length > 0), [normalizedQuery, selectedCategory]);
  const resultCount = filteredCategories.reduce((total, category) => total + category.guides.length, 0);
  const allGuides = categories.flatMap((category) => category.guides.map((guide) => ({ guide, categoryTitle: category.title })));
  const featuredIds = ["windows-11-usb", "microsoft-account-recovery", "slow-windows", "printer-not-printing", "business-email"];
  const featuredGuides = featuredIds.map((id) => allGuides.find((entry) => entry.guide.id === id)).filter(Boolean);
  const totalGuideCount = allGuides.length;

  function openGuide(entry) {
    setQuery(entry.guide.title);
    setSelectedCategory(entry.categoryTitle);
    window.setTimeout(() => document.getElementById("guide-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  function clearSearch() {
    setQuery("");
    setSelectedCategory("all");
  }

  return <>
    <section className="accent-band relative overflow-hidden text-white pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.22em]">Free visitor resource · No signup · No payment</p>
        <h1 className="mt-4 max-w-5xl text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.045em] leading-[1.02]">Free computer and technology help, step by step.</h1>
        <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/75">Practical, safety-first guides for common computer, Windows, Wi-Fi, printer, phone-storage, backup and online-security problems. Start with the symptom and use official sources.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#windows-11-usb" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500">Install Windows 11 from USB <ArrowRight size={18}/></a>
          <a href="/Eragonova_Quick_Technology_Health_Check.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-50"><Download size={18}/> Download health-check PDF</a>
        </div>
        <p className="mt-5 text-sm leading-6 text-white/60">If a step could erase data, affect a work-managed device or put personal information at risk, stop before continuing and get qualified help.</p>
        <div className="mt-6 max-w-3xl border-t border-white/15 pt-4 text-sm leading-6 text-white/65">
          <p><strong className="text-white">Developed and maintained by Eragonova Enterprise.</strong> Guides are reviewed periodically against official vendor documentation and relevant industry guidance. Follow current official instructions for your device or service.</p>
          <p className="mt-2">Last updated: 21 October 2026</p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-8 flex items-center gap-3"><ShieldCheck className="text-blue-600 dark:text-blue-300"/><h2 className="text-3xl font-bold text-slate-950 dark:text-white">Browse the free guides</h2></div>
        <div className="mb-8 rounded-3xl border border-blue-200 bg-white p-5 shadow-sm dark:border-blue-500/20 dark:bg-slate-950 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">Knowledge Centre snapshot</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5"><strong className="block text-2xl text-slate-950 dark:text-white">{totalGuideCount}</strong><span className="text-sm text-slate-600 dark:text-slate-300">Free guides</span></div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5"><strong className="block text-2xl text-slate-950 dark:text-white">{expandedCategories.length}</strong><span className="text-sm text-slate-600 dark:text-slate-300">Topic categories</span></div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5"><strong className="block text-2xl text-slate-950 dark:text-white">{printableChecklists.length}</strong><span className="text-sm text-slate-600 dark:text-slate-300">Printable checklists</span></div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5"><strong className="block text-lg text-slate-950 dark:text-white">Free</strong><span className="text-sm text-slate-600 dark:text-slate-300">Access</span></div>
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5"><strong className="block text-lg text-slate-950 dark:text-white">No signup</strong><span className="text-sm text-slate-600 dark:text-slate-300">Required</span></div>
          </div>
          <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">Featured guides</h2>
            <div className="mt-3 flex flex-wrap gap-2">{featuredGuides.map((entry) => <button key={entry.guide.id} type="button" onClick={() => openGuide(entry)} className="rounded-full border border-blue-200 px-3 py-2 text-left text-sm font-semibold text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-blue-500/30 dark:text-blue-200 dark:hover:bg-blue-500/10">{entry.guide.title}</button>)}</div>
          </div>
        </div>
        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950 sm:p-7">
          <label htmlFor="technology-help-search" className="mb-3 block text-lg font-bold text-slate-950 dark:text-white">What do you need help with?</label>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative min-w-0 flex-1">
              <Search size={19} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
              <input id="technology-help-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “Windows update”, “printer”, “WhatsApp” or “PDF”" autoComplete="off" className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-white/15 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-500/20"/>
            </div>
            <label className="sr-only" htmlFor="technology-help-category">Filter by category</label>
            <select id="technology-help-category" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-white/15 dark:bg-slate-900 dark:text-white">
              <option value="all">All categories</option>
              {categories.map((category) => <option key={category.title} value={category.title}>{category.title}</option>)}
            </select>
            {(query || selectedCategory !== "all") && <button type="button" onClick={clearSearch} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"><X size={17}/> Clear</button>}
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300" role="status" aria-live="polite">{normalizedQuery || selectedCategory !== "all" ? `${resultCount} ${resultCount === 1 ? "guide" : "guides"} found` : `Search across ${categories.reduce((n, category) => n + category.guides.length, 0)} practical guides. Results update as you type.`}</p>
        </div>
        <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950 sm:p-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">Printable resources</p><h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Free checklists</h2><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Choose a checklist, then print it or select “Save as PDF” in your browser's print dialog. No signup or payment.</p></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{printableChecklists.map((checklist) => <article key={checklist.title} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10"><h3 className="font-bold text-slate-900 dark:text-white">{checklist.title}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{checklist.items.length} practical checks</p><button type="button" onClick={() => printChecklist(checklist)} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-800"><Download size={16}/> Print / Save as PDF</button></article>)}</div>
        </div>
        <p className="mb-8 text-center text-sm text-slate-600 dark:text-slate-300">Can't find your issue? Search by a word or symptom above, or <a href="/contact/" className="font-bold text-blue-700 underline dark:text-blue-300">contact Eragonova for personalised support</a>.</p>
        <div id="guide-results" className="scroll-mt-24">{resultCount > 0 ? filteredCategories.map((category) => <section key={category.title} className="mt-12 scroll-mt-24" aria-label={category.title}>
          <div className="mb-5"><h2 className="text-3xl font-bold text-slate-950 dark:text-white">{category.title}</h2><p className="mt-2 text-slate-600 dark:text-slate-300">{category.description}</p></div>
          <div className="grid gap-6 lg:grid-cols-2">{category.guides.map((guide, index) => { const relatedGuides = category.guides.length > 1 ? [category.guides[(index + 1) % category.guides.length], category.guides[(index + 2) % category.guides.length]].filter((item) => item.id !== guide.id).slice(0, 2) : []; return <GuideCard key={guide.id} guide={guide} relatedGuides={relatedGuides} onRelatedSelect={(related) => { setQuery(related.title); setSelectedCategory(category.title); window.setTimeout(() => document.getElementById("guide-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80); }}/>; })}</div>
        </section>) : <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-white/15 dark:bg-slate-950"><h3 className="text-xl font-bold text-slate-950 dark:text-white">No matching guide yet</h3><p className="mx-auto mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">Try a shorter search term or choose All categories. If you cannot find the answer, ask Eragonova and describe the device and problem.</p><div className="mt-5 flex flex-wrap justify-center gap-3"><button type="button" onClick={clearSearch} className="rounded-xl bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800">Clear search</button><a href="/contact/" className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:text-white">Ask Eragonova</a></div></div>}</div>
        <section className="mt-14 rounded-3xl border border-violet-200 bg-white p-7 dark:border-violet-500/20 dark:bg-slate-950 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">Planned topics · no release dates</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Resource roadmap</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">These are possible future additions, not published guides yet.</p>
          <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 sm:grid-cols-2 lg:grid-cols-3">{["AI Productivity Basics","Microsoft Copilot Fundamentals","Digital Marketing Basics","Project Documentation Templates","Small Business Compliance Resources"].map((topic) => <li key={topic} className="rounded-xl bg-slate-50 px-4 py-3 dark:bg-white/5">{topic}</li>)}</ul>
        </section>
        <div className="mt-14 rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
          <div className="flex items-start gap-4"><AlertTriangle className="mt-1 shrink-0 text-amber-300"/><div><h2 className="text-2xl font-bold">When to stop and ask for help</h2><p className="mt-3 max-w-3xl leading-7 text-white/75">Stop before troubleshooting if you suspect ransomware, see a swollen battery or burning smell, risk losing irreplaceable files, or are working on a device managed by an employer or school. Contact the device owner or a qualified technician.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-950">Ask Eragonova / Contact <ArrowRight size={17}/></a><a href="https://wa.me/233505374537" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">WhatsApp Eragonova <ArrowRight size={17}/></a><a href="mailto:eragonovaenterprise@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">Email us</a></div></div></div>
        </div>
      </div>
    </section>
  </>;
}
