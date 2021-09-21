export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export const openInCurrentTab = (url, router = undefined) => {
  if (router) router.push(url);
  else window.location.assign(url);
};
