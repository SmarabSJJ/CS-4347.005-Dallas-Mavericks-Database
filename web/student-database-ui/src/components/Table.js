import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../api/createClient";

const ExampleTableTable = () => {
  return (
    <div className="checkkk">  
        <table className="tablee">
          <tr className="tabletitle">
            <th> Id </th>
            <th> Name </th>
            <th> JerseyNum </th>
            <th> Season </th>
            <th> CoachName </th>
            <th> ContractNumber </th>
            <th> Stadium </th>
            <th> Points </th>
            <th> City </th>
          </tr>
          <tbody className="tablebody">
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          <tr>
            <td> 12345 </td>
            <td> Luka </td>
            <td> 10 </td>
            <td> 2024 </td>
            <td> Kyrie </td>
            <td> 85 </td>
            <td> Madison Square Garden </td>
            <td> 50 </td>
            <td> Dallas </td>
          </tr>
          </tbody>
        </table>
    </div>
   );
}

const Table = ({input, state}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState("")


  useEffect(() => {
    console.log(input)
    const fetchData = async () => {
      try {
        if(state.applicationState === 'Query'){
          const { data, error } = await supabase.from('player').select()
          if (error) throw error
          setData(data)
        }
        setLoading(false)
      } catch (err) {
        setError('Error fetching data')
        setLoading(false)
      }
    }

    if (input) {
      fetchData()
    }


  }, [input, state])

  const handleOperation = async () => {
    try{
      let result;
      if(state.applicationState === 'Insert'){
        result = await supabase.rpc('execute_insert_query', { query: input })
      } else if (state.applicationState === 'Update'){
        result = await supabase.rpc('execute_update_query', { query: input })
      } else if (state.applicationState === 'Delete') {
        result = await supabase.rpc('execute_delete_query', { query: input })
      }

      if (result) {
        setMessage(result)
      }
    } catch (err) {
      setError('Error executing operation')
    }
  }

  if (loading && state.applicationState === 'Query'){
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (data.length === 0 && state.applicationState === 'Query'){
    return <div>No data available</div>
  }

  const headers = data[0] ? Object.keys(data[0]) : []

  return (
    <div className="table">
      {state.applicationState === 'Query' && (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, index) => (
                  <td key={index}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
 
export default Table;
