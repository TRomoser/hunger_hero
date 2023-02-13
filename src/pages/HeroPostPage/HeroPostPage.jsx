import HeroForm from "../../components/HeroForm/HeroForm";
import { useNavigate } from 'react-router-dom';

export default function HeroPostPage() {

  const navigate = useNavigate()


  return (
    <div>
    <HeroForm navigate={navigate}/>

    </div>
  );
}