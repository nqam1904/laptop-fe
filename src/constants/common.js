import configApi from "api/configApi";
let title_website = ''
export const getConfigWeb = async () => {
   let getConfig = await configApi.getConfig();
   document.title = getConfig?.[0]?.content || 'Lap4all - Thịnh'
   title_website = getConfig?.[0]?.title_website || 'Lap4all'
}
export { title_website }