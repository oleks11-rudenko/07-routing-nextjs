import css from './SearchBox.module.css';

interface SearchBoxProps {
  initialValue: string;
  onSearchChange: (newSearchQuery: string) => void;
}

export default function SearchBox({ initialValue, onSearchChange }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={initialValue}
      onChange={handleChange}
    />
  );
}
