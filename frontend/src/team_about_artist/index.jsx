import { Grid, Box, Typography } from "@mui/material";
import Banner_image from "./component/Banner_image";
import ListenerFollower from "./component/ListenerFollower";
import ListenerEachCountry from "./component/ListenerEachCountry";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import Axios from '../axios/AxiosInstance'

export default function TeamAboutArtist$() {
	const [artist, setArtist] = useState([]);
	const [country, setCountry] = useState([])
	const { artistId } = useParams();

	useEffect(() => {
		Axios.get("/groupThree/artist", {
			params: {
				artistId: artistId,
			},
		})
			.then((response) => {
				// Handle the response data
				// console.log(artistId)
				const responseData = response.data;
				if (responseData.success) {
					setArtist(responseData.data);
					// console.log(artist.name)
				} else {
					// Handle unsuccessful response
				}
			})
			.catch((error) => {
				// Handle the error
				console.error(error);
			});

		Axios.get("/groupThree/country", {
			params: {
				artistId: artistId,
			},
		})
			.then((response) => {
				// Handle the response data
				// console.log(artistId)
				const responseData = response.data;
				if (responseData.success) {
					setCountry(responseData.data);
					// console.log(artist.name)
				} else {
					// Handle unsuccessful response
				}
			})
			.catch((error) => {
				// Handle the error
				console.error(error);
			});
	}, [artist, country]);

	return (
		<>
			<Box
				sx={{ padding: 1, borderRadius: "5px", background: "rgba(0,0,0,.1)" }}
			>
				<Typography fontSize="28px" fontWeight={800}>
					About
				</Typography>
			</Box>

			<Box
				sx={{ padding: 2, borderRadius: "5px", background: "rgba(0,0,0,.3)" }}
			>
				<Banner_image banner_url={artist.banner_url} />
			</Box>

			<Grid container direction="row">
				<Grid item xs={3} sm={3}>
					<ListenerFollower listener={artist.listener} count={artist.count} follower={artist.followers} />
					{/* {country.map((item, index) => (
						<ListenerEachCountry key={index} country_name={item.country_name} count={item.count} />
					))}

					{country.map((country, index) => (
						<ListenerEachCountry key={index} country={country} />
					))} */}
				</Grid>

				<Grid item xs={9} sm={9} >
					<Box
						sx={{
							padding: 2,
							borderRadius: "5px",

						}}
					>
						<Typography fontSize="18px" fontWeight={500}>
							{artist.biography}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

