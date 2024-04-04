import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Calendercard = () => {
    
  return (
  
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Campaign</h2>
    <Calendar />
  </div>
</div>

  );
};

export default Calendercard;