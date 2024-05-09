import React from "react";
import logo from "../assets/logo.png";

export default function footer() {
	return (
		<>
			<footer>
				<div className="text-center">
					<p className="font-bold text-5xl">Contact Us</p>
					<p className="text-base font-bold mt-5">
						Reach out at learnablekids-feedback@learnable.com
					</p>
					<div className="flex justify-center items-center mt-5">
						<div className="flex gap-x-5">
							<a href="">1</a>
							<a href="">2</a>
							<a href="">3</a>
							<a href="">4</a>
							<a href="">5</a>
						</div>
					</div>
					<div className="flex gap-x-20 justify-center items-center">
						<div className="flex font-bold gap-x-5 mt-5">
							<a href="">About</a>
							<a href="">Careers</a>
							<a href="">Apps</a>
							<a href="">Help</a>
							<a href="">Terms</a>
							<a href="">Privacy</a>
						</div>
						<img src={logo} alt="learnable kids logo" />
					</div>
					<p>2024 © Copyright Group 3 learnable23</p>
				</div>
			</footer>
		</>
	);
}
