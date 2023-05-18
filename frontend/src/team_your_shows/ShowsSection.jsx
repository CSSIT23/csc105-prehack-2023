import { Box, Typography } from "@mui/material";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../share/context/auth";
import { useQuery, useQueryClient } from 'react-query';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function ShowsSection() {
  const [ shows, setShows ] = useState([]);
  const [startFetch, setStartFetch] = useState(false)
  const { user } = useContext(AuthContext);

  const Axios = axios.create({ baseURL: 'http://localhost:6105', withCredentials: true });

//   useEffect(() => {
//     Axios.get('/').then((res) => {
//     console.log(res);
//     setShows(res.data.data);
//     });
//   }, [user]);

//   const queryClient = useQueryClient();

//   const fetchShows = async () => {
//     const userToken = Cookies.get('UserToken');
//     return await Axios.get('/', {
//       headers: { 
//         Authorization: `Bearer ${userToken}`,
//       },
//     });
//   };

//   useEffect(() => {
//     const userToken = Cookies.get('UserToken');
//     setStartFetch(!(userToken == null || userToken == 'undefined'));
//   }, [user]);

//   useQuery('shows', fetchShows, {
//     onSuccess: (data) => {
//       queryClient.invalidateQueries();
//       setShows(data.data.data);
//     },
//     enabled: startFetch,
//   });
  
return (
  <Box sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}>
    <Typography fontSize="28px" fontWeight={800}>
      Your Show All
    </Typography>

    <Box sx={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
      {shows.map((show, index) => (
        
        <ShowCard key={index} image={show?.coverUrl}  title={show?.title} author={show?.author} />
     ))}

    </Box>
  </Box>
);
}
