import React from 'react';

const Navbar = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>PDF</a>
							<ul className='p-2'>
								<li>
									<a>Watermark PDF</a>
								</li>
								<li>
									<a>Compress PDF</a>
								</li>
								<li>
									<a>Set PDF Metadata</a>
								</li>
								<li>
									<a>Embed PNG and JPEG Images</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Images</a>
							<ul className='p-2'>
								<li>
									<a>Watermark PDF</a>
								</li>
								<li>
									<a>Compress PDF</a>
								</li>
								<li>
									<a>Set PDF Metadata</a>
								</li>
								<li>
									<a>Embed PNG and JPEG Images</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<a className='btn btn-ghost normal-case text-xl'>Watermarkly</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li className='mx-1'>
						<a>Home</a>
					</li>
					<li className='mx-1'>
						<a>About</a>
					</li>
					<div className='dropdown'>
						<li tabIndex={0} className='mx-1'>
							<a>PDF</a>
						</li>
						<div
							tabIndex={0}
							className='dropdown-content z-[1] card card-compact w-96 p-2 shadow bg-primary text-primary-content grid grid-cols-2'>
							<div className='card-body'>
								<h3 className='card-title'>Watermark PDF</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Compress PDF</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Set PDF Metadata</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Embed PNG and JPEG Images</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
						</div>
					</div>
					<div className='dropdown'>
						<li tabIndex={0} className='mx-1'>
							<a>Images</a>
						</li>
						<div
							tabIndex={0}
							className='dropdown-content z-[1] card card-compact w-96 p-2 shadow bg-primary text-primary-content grid grid-cols-2'>
							<div className='card-body'>
								<h3 className='card-title'>Watermark Images</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Compress PDF</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Set PDF Metadata</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Embed PNG and JPEG Images</h3>
								<p>you can use any element as a dropdown.</p>
							</div>
						</div>
					</div>
				</ul>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img src='/images/stock/photo-1534528741775-53994a69daeb.jpg' />
						</div>
					</label>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
