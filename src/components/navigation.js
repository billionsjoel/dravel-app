import '../scss/nav.scss';

function Navigation() {
	return (
		<div className="menu-container">
			<div className="logo">Dravel</div>
			<ul className="menu">
				<li>Destinations</li>
				<li>Trips</li>
				<li>Reserve</li>
			</ul>
			<div className="socials fixed-bottom">
				<ul>
					<li>
						<i class="fa fa-twitter" aria-hidden="true"></i>
					</li>
					<li>
						<i class="fa fa-facebook" aria-hidden="true"></i>
					</li>
					<li>
						<i class="fa fa-youtube-play" aria-hidden="true"></i>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
