import CommentForm from '../components/CommentForm';
import Navbar from "../components/Navbar"
import FooterNavigation from '../components/FooterNavigation';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const urlBaseServer = "http://localhost:3000"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5vbWJyZSI6IkpvaG4iLCJhcGVsbGlkbyI6IkRvZSIsImRpcmVjY2lvbiI6IkF2LiBQcm92aWRlbmNpYSIsImNvcnJlbyI6ImpvaG5kb2VAY29ycmVvLmNvbSIsImNvbnRyYXNlbmEiOiJwYXNzd29yZDEyMyIsImltZyI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi81MS5qcGciLCJyb2wiOiJ1c2VyIn0sImlhdCI6MTY5MTAxNDY1OX0.pIsKH-vS1AIb85NTKLUxzEv-xwEeemE5YMKb-adwLcg"

function App() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/comentarios");
    setPosts([...posts]);
  };

  const agregarPost = async () => {
    const post = { title, comment };
    await axios.post(urlBaseServer + "/comentarios", post, { headers: { Authorization: `Bearer ${token}` }});
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

    return (
        <>
        <Navbar title={"ENVIANOS TUS COMENTARIOS"} />

        <div className='envio-comentario' style={{ backgroundColor: "#cd966c" }}>
            <CommentForm 
                setTitle={setTitle}
                setComment={setComment}
                agregarPost={agregarPost}
            />
        </div>
        <FooterNavigation />

        </>
    );
};

export default App;
