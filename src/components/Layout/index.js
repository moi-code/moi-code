import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/index.css';

export default ({ children }) => (
	<div className='h-100'>
		<Navbar />
		<div className='h-100 container-fluid'>{children}</div>
	</div>
);
