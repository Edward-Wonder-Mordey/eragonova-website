import React from "react";
import { ArrowRight, AlertTriangle, CheckCircle2, Download, ExternalLink, ShieldCheck } from "lucide-react";

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
];

function GuideCard({ guide }) {
  return <article id={guide.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
    <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{guide.title}</h2>
    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{guide.summary}</p>
    <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
    <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100"><strong>Safety note:</strong> {guide.caution}</p>
    {guide.links?.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900 dark:text-blue-300">{link.label} <ExternalLink size={16}/></a>)}
  </article>;
}

export default function DigitalHelpPage() {
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
      </div>
    </section>
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-8 flex items-center gap-3"><ShieldCheck className="text-blue-600 dark:text-blue-300"/><h2 className="text-3xl font-bold text-slate-950 dark:text-white">Browse the free guides</h2></div>
        <div className="mb-14"><h3 className="mb-5 text-xl font-bold text-slate-950 dark:text-white">Quick technology health checks</h3><div className="grid gap-6 lg:grid-cols-2">{helpGuides.map((guide) => <GuideCard key={guide.id} guide={guide}/>)}</div></div>
        {expandedCategories.map((category) => <section key={category.title} className="mt-14 scroll-mt-24" aria-label={category.title}>
          <div className="mb-5"><h2 className="text-3xl font-bold text-slate-950 dark:text-white">{category.title}</h2><p className="mt-2 text-slate-600 dark:text-slate-300">{category.description}</p></div>
          <div className="grid gap-6 lg:grid-cols-2">{category.guides.map((guide) => <GuideCard key={guide.id} guide={guide}/>)}</div>
        </section>)}
        <div className="mt-14 rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
          <div className="flex items-start gap-4"><AlertTriangle className="mt-1 shrink-0 text-amber-300"/><div><h2 className="text-2xl font-bold">When to stop and ask for help</h2><p className="mt-3 max-w-3xl leading-7 text-white/75">Stop before troubleshooting if you suspect ransomware, see a swollen battery or burning smell, risk losing irreplaceable files, or are working on a device managed by an employer or school. Contact the device owner or a qualified technician.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/contact/" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-950">Ask Eragonova / Contact <ArrowRight size={17}/></a><a href="https://wa.me/233505374537" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">WhatsApp Eragonova <ArrowRight size={17}/></a><a href="mailto:eragonovaenterprise@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">Email us</a></div></div></div>
        </div>
      </div>
    </section>
  </>;
}
