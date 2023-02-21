import HeroForm from "../../components/HeroForm/HeroForm";
import { useNavigate } from 'react-router-dom';

export default function HeroPostPage(props) {

  const { user } = props

  const navigate = useNavigate()


  return (
    <div>
    <HeroForm navigate={navigate} user={user}/>
    </div>
  );
}