// In your Vue component
export default function isMobile(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  if (
    userAgent.match(
      "/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i"
    )
  ) {
    return true;
  }
  return false;
}
