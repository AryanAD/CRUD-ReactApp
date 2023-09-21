import React from "react";
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
// const navItems = ["Home", "Add"];

function Nav(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: "center" }}>
			<Typography
				variant="h5"
				sx={{ my: 2 }}>
				MOCK API DATA MANIPULATION
			</Typography>
			<Divider />
			<List sx={{ display: "flex" }}>
				<ListItem>
					<ListItemButton>
						<ListItemText>HOME</ListItemText>
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						<ListItemText>ADD</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						MOCK API DATA MANIPULATION
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<List sx={{ display: "flex" }}>
							<ListItem>
								<ListItemButton>
									<ListItemText>HOME</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton>
									<ListItemText>ADD</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
			</nav>
			<Box
				component="main"
				sx={{ p: 3 }}>
				<Toolbar />
			</Box>
		</Box>
	);
}

export default Nav;
