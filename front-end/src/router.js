import React from 'react';						
import Blog_Student from './Blog-Component/blog-student';
import Donate from './Donation/Donate';
import Navbar from './Header/Navbar';
import Partner from './Partner/main_partner';

const routes = [						
	{					
		path : '/',				
		exact : true,				
		main : ()=> <Navbar />				
	},
	{					
		path : '/donate',				
		exact : true,				
		main : ()=> <Donate />				
	},
	{					
		path : '/partner',				
		exact : true,				
		main : ()=> <Partner />				
	},
	{					
		path : '/student_blog',				
		exact : true,				
		main : ()=> <Blog_Student />				
	}
	
];						
						
						
export default routes;						