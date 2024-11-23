import { Box, Button, Grid2, TextField } from "@mui/material";

function Admin() {
	return (
		<Grid2 container spacing={3} direction={"column"} padding={2}>
			<Grid2 size={8}>
				<TextField
					label="Description"
					variant="outlined"
					fullWidth
					multiline
					rows={4}
				/>
			</Grid2>
			<Grid2 size={8}>
				<Box>
					<Button variant="contained" component="label">
						Upload Image
						<input type="file" hidden />
					</Button>
				</Box>
			</Grid2>
		</Grid2>
	);
}

export default Admin;
