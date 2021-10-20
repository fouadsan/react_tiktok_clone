import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="App">
     <div className="app__videos">
       <Video 
          url="https://v77.tiktokcdn.com/f2d89c153c98258c32f3f40bcb787d6e/6170887c/video/tos/alisg/tos-alisg-pve-0037c001/2d0adb85588e41c9bd1130d9afc6ea20/?a=1233&br=2808&bt=1404&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98ZCReOd4kag3&l=20211020152105010190185137451611A3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3ltZTQ6ZnZ1NzMzODczNEApNGllNjhoOWU7Nzs6Mzc2OGcwLzJucjQwaV9gLS1kMS1zc14yLWFfYTEyYTAzYjE0LjI6Yw%3D%3D&vl=&vr="
          channel="fouadsan"
          description="this is a description"
          song="prince of persia ost: welcome within"
          likes={200}
          messages={200}
          shares={200}
       />
       <Video />
       <Video />
       <Video />
       <Video />
     </div>
    </div>
  );
}

export default App;
