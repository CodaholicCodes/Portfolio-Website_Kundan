import TechPills from "./TechPills";
const Project=({title,desc,techStack,demoUrl})=>{
return <div className='bg-slate-100 max-w-4xl mx-auto rounded-xl shadow-lg p-6 mb-4'>
<h1 className="font-semibold text-xl mb-2">{title}</h1>
<p className="text-sm text-gray-700 mb-4">
{desc}
</p>
{techStack.map((item)=><TechPills title={item} />)}
<br />
<a
  href={demoUrl}
  className="py-5 text-blue-800 hover:text-blue-600 underline"
  target="_blank"
  rel="noopener noreferrer"
>
  🔗 Live Demo
</a>
</div>
}

export default Project;