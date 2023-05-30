
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export const BasicModal = ({setvisible}) => {
  return (
    <div className='modal'>

        <div className="card">
            <div className="card-heading">
               <h2>Heading 1 </h2>
               <FontAwesomeIcon onClick={()=>setvisible(false)} icon={faXmark} style={{"fontSize":"22px",}} />
            </div>
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorem excepturi ducimus mollitia fuga obcaecati suscipit totam ipsum molestiae neque.</p>
            </div>
        </div>
    </div>
  )
}
