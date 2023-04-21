import React from 'react';
import { Dropdown } from 'flowbite-react';

const GenresDropdown = ({ data: genres, setGenre }) => {
  const DropdownItems = genres?.map(
    ({ id, value }) => {
      return (
        <Dropdown.Item
          key={id}
          onClick={() => { setGenre(id) }}
        >
          {value}
        </Dropdown.Item>
      );
    }
  );

  return (
    <Dropdown
      label="Filter by Genre"
      inline={true}
      placement="right-start"
    >
      {DropdownItems}
    </Dropdown>
  )
}

export default GenresDropdown;