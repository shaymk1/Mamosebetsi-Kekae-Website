import React from "react";

function Header() {
  return (
		<div
			id="Header"
			className="items-center justify-center mx-12 text-justify lg:mx-60 pt-60 lg:w-1/2"
		>
			<div className="flex flex-col">
				<code className="text-lightblue_vs">Hi, my name is</code>
				<code className="text-[#e6f1ff] text-7xl mt-5">Mamosebetsi Kekae</code>
				<code className="py-2 text-lightblue_vs">Blockchain Developer</code>
			</div>
			<button className="w-1/2 p-3 mt-10 border rounded border-lightblue_vs text-lightblue_vs hover:bg-opacity-10 hover:bg-lightblue_vs">
				<a href="https://github.com/shaymk1/">
					<code>Check out my Projects !</code>
				</a>
			</button>
		</div>
	);
}

export default Header;
