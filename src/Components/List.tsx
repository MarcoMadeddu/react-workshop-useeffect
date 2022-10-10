import Users from '../Models/Users'

interface ListProps {
    data: Users[]
}

export const List: React.FC<ListProps> = (props:ListProps) => {
    return (<div>
      {
        props.data?.map((user) => {
          return <li className="list-group-item" key={user.id}>{user.name}</li>
        })
      }
    </div>)
  }