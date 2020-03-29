export default function perfetchImg (src: string | string[]) {
  const allSrc = Array.isArray(src) ? src : [src];
  setTimeout(() => {
    allSrc.forEach(s => {
      const img = new Image();
      img.src = s;
    })
  }, 0);
}
