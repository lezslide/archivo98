$log = 'C:\Users\Tito\Archivo98\apple-driver-install.log'
try {
  'Starting Apple USB driver install via Windows Update API' | Out-File $log -Encoding UTF8
  $session = New-Object -ComObject Microsoft.Update.Session
  $searcher = $session.CreateUpdateSearcher()
  $result = $searcher.Search("IsInstalled=0 and Type='Driver'")
  $updates = New-Object -ComObject Microsoft.Update.UpdateColl
  foreach ($u in $result.Updates) {
    if ($u.Title -like 'Apple, Inc. - USBDevice*') {
      "Found: $($u.Title)" | Out-File $log -Append -Encoding UTF8
      [void]$updates.Add($u)
    }
  }
  if ($updates.Count -eq 0) { 'No Apple USB driver found.' | Out-File $log -Append -Encoding UTF8; exit 2 }
  $downloader = $session.CreateUpdateDownloader()
  $downloader.Updates = $updates
  $downloadResult = $downloader.Download()
  "Download ResultCode=$($downloadResult.ResultCode)" | Out-File $log -Append -Encoding UTF8
  $installer = $session.CreateUpdateInstaller()
  $installer.Updates = $updates
  $installResult = $installer.Install()
  "Install ResultCode=$($installResult.ResultCode) RebootRequired=$($installResult.RebootRequired)" | Out-File $log -Append -Encoding UTF8
  for ($i=0; $i -lt $updates.Count; $i++) {
    $r = $installResult.GetUpdateResult($i)
    "$($updates.Item($i).Title) => Result=$($r.ResultCode) HResult=$('{0:X8}' -f $r.HResult)" | Out-File $log -Append -Encoding UTF8
  }
} catch {
  "ERROR: $($_.Exception.Message)" | Out-File $log -Append -Encoding UTF8
  if ($_.Exception.HResult) { "HRESULT: $('{0:X8}' -f $_.Exception.HResult)" | Out-File $log -Append -Encoding UTF8 }
  exit 1
}
