import HeroPostForm from "../../components/HeroPostForm/HeroPostForm";
import { useNavigate } from 'react-router-dom';

export default function HeroPostPage(props) {
  const { user } = props
  const navigate = useNavigate()

  return (
    <div>
      <HeroPostForm navigate={navigate} user={user}/>
    </div>
  );
}