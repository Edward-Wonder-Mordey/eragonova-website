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
        <div className="grid gap-6 lg:grid-cols-2">{helpGuides.map((guide) => <GuideCard key={guide.id} guide={guide}/>)}</div>
        <div className="mt-14 rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
          <div className="flex items-start gap-4"><AlertTriangle className="mt-1 shrink-0 text-amber-300"/><div><h2 className="text-2xl font-bold">When to stop and ask for help</h2><p className="mt-3 max-w-3xl leading-7 text-white/75">Stop before troubleshooting if you suspect ransomware, see a swollen battery or burning smell, risk losing irreplaceable files, or are working on a device managed by an employer or school. Contact the device owner or a qualified technician.</p><a href="/contact/" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-950">Contact Eragonova <ArrowRight size={17}/></a></div></div>
        </div>
      </div>
    </section>
  </>;
}
