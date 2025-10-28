import passportPhoto from '../assets/passport-photo.jpg';
const Header=()=>{
return <header className="bg-blue-600 text-white  px-4 py-8 rounded-xl flex justify-between items-center">
  <div>
  <div className="font-bold text-3xl">Kundan Singh</div>
  <div className="font-semibold text-xl">Student</div>
  </div>
<img className="rounded-full w-24" src={passportPhoto} alt="" />
</header>;
}
export default Header;