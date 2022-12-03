export function getJobInternalUrl(id: string) {
  return [process.env.NEXT_PUBLIC_STATIC_ASSETS_PATH, id].join("/");
}
