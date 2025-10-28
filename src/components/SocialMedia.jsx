const SocialMedia=({icon,title,url})=>{
return <a className="mb-2 flex  text-blue-600 hover:text-blue-800" href={url} target="_blank">{icon}  <span className="ml-2">{title}</span> </a>
}
export default SocialMedia;