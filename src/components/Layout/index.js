import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/index.css';
import "../../../public/fonts.css";
// import "../../../public/bootstrap.bundle";
import "jquery/dist/jquery.min";
export default ({ children }) => (
	<div className='h-100'>
		<Navbar />
		<div className='layout container-fluid'>{children}</div>
	</div>
);
