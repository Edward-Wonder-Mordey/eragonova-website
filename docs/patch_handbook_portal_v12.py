from pathlib import Path

path = Path('docs/generate_handbook.py')
text = path.read_text(encoding='utf-8')

text = text.replace("('Handbook version','Version 1.1 — 13 October 2026')", "('Handbook version','Version 1.2 — 13 October 2026')")

text = text.replace(
"('Client Portal','src/pages/PortalPage.jsx','Public portal presentation and access request experience.'),",
"('Client Portal','src/pages/PortalPage.jsx + src/components/PortalAdminConsole.jsx + PortalAdminExtras.jsx + PortalClientExtras.jsx','Secure Supabase-backed portal, client workspace, administrator controls, staff operations and profile tools.'),"
)

old_section_11 = """# 11 portal
heading(doc,'11. Client Portal',1)
body(doc,'The public Client Portal experience is in src/pages/PortalPage.jsx. Treat the current portal as a controlled access / engagement experience. Do not claim there is a full authentication, billing or database backend unless one is actually connected.')
heading(doc,'11.1 Future portal upgrades',2)
bullets(doc,['Real user authentication and password reset','Client-specific invoices and documents','Secure training materials','Appointment/project status','Payment records','Role-based access and audit logging'])
note(doc,'Security rule','Never place client passwords, API keys, payment secrets or private documents directly inside public React source files or the public GitHub repository.','danger')
"""

new_section_11 = """# 11 portal
heading(doc,'11. Client Portal',1)
body(doc,'The Client Portal is now a live Supabase-backed system rather than a presentation-only page. The React interface is in src/pages/PortalPage.jsx, with administration and staff tools in src/components/PortalAdminConsole.jsx and src/components/PortalAdminExtras.jsx, and client profile/support/billing enhancements in src/components/PortalClientExtras.jsx. Supabase provides authentication, the PostgreSQL database, Row Level Security and private file storage.')
heading(doc,'11.1 Access roles',2)
table(doc,['Role','Purpose','Typical access'],[
('Admin','Owner-level portal administration','Create and edit client organisations, invite users, manage roles/statuses, manage projects, documents, billing, support and notifications.'),
('Staff','Operational delivery access','Manage projects, milestones, client-visible updates, documents, billing and support without permission to manage administrator/client identities or client-organisation ownership controls.'),
('Client','Organisation-specific client access','View only records allowed for the client organisation: projects, milestones, updates, private documents, invoices, notifications and support conversations.')],widths=[Cm(3.1),Cm(5.1),Cm(9.3)],small=True)
heading(doc,'11.2 Main portal capabilities',2)
bullets(doc,['Secure email/password sign-in and password reset','Dashboard with project/document/support/notification summaries','Client-specific projects, dates, progress and milestones','Private document download through signed URLs','Client-visible billing and invoice status, including browser Print / Save as PDF','Support tickets with client/staff conversation history and internal staff notes','Portal notifications for project updates, invoices and support activity','Editable user profile including full name, phone, job title, profile photo and password','Administrator client search, editing, client numbering, special badges and access management','Separate administrator and future staff workspaces'])
heading(doc,'11.3 Elyra Suite — founding client',2)
body(doc,'Elyra Suite is recorded in the portal as Client 001 and receives a permanent Founding Client distinction with a crown-style badge and its logo. Its first recorded project is Elyra Suite Website Development (ELYRA-WEB-001): brief received 11 October 2026, work started 12 October 2026, planned due date 26 October 2026, and completed ahead of schedule on 13 October 2026.')
note(doc,'Security rule','Never place client passwords, service-role keys, database passwords, payment secrets or private documents inside public React source files or the public GitHub repository. The browser may contain the Supabase publishable key because Row Level Security is the security boundary; the Supabase service-role key must remain server-side only.','danger')
"""
if old_section_11 not in text:
    raise SystemExit('Section 11 block not found')
text = text.replace(old_section_11, new_section_11)

old_security = """# 20 security/backends
heading(doc,'20. Security, Client Data and Future Backend Features',1)
bullets(doc,['Never commit passwords, private API keys, payment secrets or client confidential documents to the public repository.','Do not store real portal usernames/passwords in React source code.','Use a secure backend or trusted service for authentication, payments and private client files.','Limit Formspree access to the appropriate business owners and review spam/security settings.','Use least-privilege access when adding collaborators to GitHub.','Before publishing project/client information, confirm permission and remove confidential details.'])
heading(doc,'20.1 Features that need real backend systems',2)
table(doc,['Feature','What is needed'],[
('Authenticated Client Portal','Identity/authentication service, secure database/storage, access rules, password recovery.'),('Online payments','Payment provider integration, server-side verification/webhooks, terms/refund process.'),('Private documents','Secure storage with client-specific permissions.'),('Real Academy accounts','Learner database, enrolment records, protected materials and completion records.'),('Automated invoicing','Accounting/payment workflow or secure backend/API.')],widths=[Cm(5),Cm(12.5)])
"""

new_security = """# 20 security/backends
heading(doc,'20. Security, Client Data and Backend Systems',1)
body(doc,'The production Client Portal uses Supabase authentication, PostgreSQL, private Storage buckets and Row Level Security (RLS). Client access is organisation-scoped: belonging to one client organisation does not grant visibility into another client organisation. Administrative operations that require elevated privileges use a JWT-protected Supabase Edge Function and database policies.')
bullets(doc,['Never commit passwords, Supabase service-role keys, database passwords, payment secrets or client confidential documents to the public repository.','The Supabase publishable browser key is not a secret; security must continue to be enforced with RLS and server-side privilege checks.','Keep client documents in private Storage buckets and use authenticated or short-lived signed URLs for downloads.','Keep administrator, staff and client permissions separate. Staff operational access must not silently become administrator access.','Review Supabase Security and Performance Advisors after database/schema changes.','Use least-privilege access for GitHub, Supabase and business systems.','Before publishing project/client information, confirm permission and remove confidential details.'])
heading(doc,'20.1 Current backend controls',2)
table(doc,['Control','Current implementation'],[
('Authentication','Supabase Auth with approved user accounts, password reset and JWT sessions.'),
('Data isolation','RLS policies restrict client rows by active organisation membership.'),
('Admin authorization','Administrator-only functions verify the signed-in user has an active admin profile.'),
('Private documents','client-documents, support-attachments and profile-avatars are private Storage buckets.'),
('Role separation','Admin, Staff and Client roles have different portal capabilities and database permissions.'),
('Notifications','Project updates, invoice changes and support activity can create portal notifications.'),
('Support','Tickets and threaded support messages are organisation-scoped; internal notes are hidden from clients.')],widths=[Cm(5),Cm(12.5)])
heading(doc,'20.2 Supabase Pro security upgrade',2)
body(doc,'The project currently uses the Supabase Free plan. Supabase Leaked Password Protection is available on the Pro plan and above. When Eragonova upgrades to Supabase Pro, enable Leaked Password Protection under Authentication password security so compromised passwords can be rejected using the Have I Been Pwned Pwned Passwords service. Also review password-strength and MFA options at that time.')
note(doc,'Planned security upgrade','Upgrade Supabase to Pro when the portal/client volume justifies the recurring cost, then enable Leaked Password Protection. Until then, continue using strong unique passwords, RLS, private storage and role-based access.','warn')
"""
if old_security not in text:
    raise SystemExit('Section 20 block not found')
text = text.replace(old_security, new_security)

text = text.replace(
"('Portal authentication','Turns public portal concept into real client access.','When recurring clients justify it.'),",
"('Supabase Pro security upgrade','Enables Leaked Password Protection and stronger production security options.','When portal/client volume justifies the Pro plan.'),"
)

text = text.replace(
"('Elyra partnership','src/pages/PartnersPage.jsx and src/pages/HomePage.jsx','Logo, link and partnership wording appear in both.'),",
"('Elyra partnership / first-client history','src/pages/PartnersPage.jsx, src/pages/HomePage.jsx and Supabase Client Portal','Public partnership wording remains independent; the private portal separately records Elyra Suite as Client 001 / Founding Client.'),"
)

path.write_text(text, encoding='utf-8')
print('Updated handbook generator to Version 1.2 with live portal and Supabase security guidance.')
