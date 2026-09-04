# Bluehost cPanel deployment

This app is a Vite/React static site with a PHP contact-form handler. GitHub may remain the source repository; Bluehost hosts the production files.

## Before deploying

1. In Bluehost cPanel, point `agsedu.org` (or the intended domain) to its document root, normally `public_html`.
2. Use **Email Accounts** to create or confirm `admin@agsedu.org` (or another address on the hosted domain). The PHP handler uses cPanel's local mail service, so no SMTP password is stored in the website.
3. In cPanel **Select PHP Version**, use PHP 7.4+ and ensure `mbstring` is enabled.

## Create the deployable files

Run this locally from the repository root:

```powershell
npm ci
npm run build
```

The `dist` folder is the complete web-root upload. It includes the static site, `.htaccess`, and `api/contact.php`.

## Deploy from GitHub (recommended)

The repository includes `.github/workflows/deploy-bluehost.yml`. It builds the site and deploys `dist/` to Bluehost whenever a change is pushed to the `master` branch. It does not use Vercel.

Before the first deployment, create an FTP account in cPanel **FTP Accounts** that has access to `public_html`, then add these GitHub repository secrets in **Settings → Secrets and variables → Actions**:

| Secret | Value |
| --- | --- |
| `BLUEHOST_FTP_SERVER` | Bluehost FTP host name (do not include `ftp://` or `https://`) |
| `BLUEHOST_FTP_USERNAME` | FTP account username |
| `BLUEHOST_FTP_PASSWORD` | FTP account password |

Use FTPS on port 21. Do not put credentials in a committed file. After adding the secrets, use **Actions → Deploy to Bluehost → Run workflow** for the first deployment, then future pushes to `master` deploy automatically.

## Configure mail on the server

After uploading, in cPanel File Manager open `public_html/api/` and copy `contact-config.example.php` to `contact-config.php`. Edit only these values:

```php
return [
    'to' => 'admin@agsedu.org',
    'from_email' => 'admin@agsedu.org',
    'from_name' => 'Accra Grammar School',
];
```

Use a real mailbox on the hosted domain as `from_email`; this improves delivery. The root `.htaccess` blocks web access to both configuration files. Never commit `contact-config.php`.

## Upload and activate

1. Zip the **contents** of `dist` (not the `dist` folder itself).
2. Back up the current `public_html` contents in cPanel, then upload the zip into `public_html` and extract it there.
3. Confirm `.htaccess` is present. In File Manager, enable **Show Hidden Files** if necessary.
4. Create `api/contact-config.php` as described above.
5. Test the home page, a direct route such as `/admissions`, the Library and Moodle links, and all three forms—especially an application with an attachment under 2.5 MB.

`/library/*` and `/moodle/*` use temporary (302) redirects, matching the prior Vercel behavior. Change `R=302` to `R=301` only after confirming the destinations.

## DNS cutover

In the DNS provider, replace the Vercel domain records with the A record / nameservers supplied by Bluehost. Keep the old Vercel deployment available until DNS propagation completes and the production checks above pass. DNS changes can take several hours, occasionally up to 48 hours.

## External services that remain unchanged

The site currently reads news and events from `https://ags-dashboard.vercel.app/api`. This can remain on Vercel independently. If that dashboard is also being retired, its API must be migrated separately and the frontend rebuilt with `VITE_CMS_API_URL` pointing to its new URL.

## Rollback

Restore the `public_html` backup and point DNS back to Vercel. No database migration is part of this website deployment.
