import Mail from './svg/Mail';

export const EmailInput = ({
  placeholder,
  styles = 'w-full sm:w-3/5',
  value,
  onChange,
  name,
  style,
}) => {
  return (
    <div className={`relative ${styles}`} style={style}>
      <input
        className='subscribe-input-email w-full '
        type='enail'
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      <Mail className='absolute left-[15px] sm:left-[12px] top-1/2 transform -translate-y-1/2  text-gray-400' />
    </div>
  );
};

export const TextInput = ({
  placeholder,
  styles = 'w-full sm:w-1/2',
  style,
  value,
  onChange,
}) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`subscribe-input-text ${styles}`}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
};
