// FormField.tsx
import React from 'react';

interface Option {
  value: string;
  label: string;
  selected?: boolean;
}

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type: 'select' | 'text' | 'date';
  options?: Option[];
  placeholder?: string;
  disabled?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, id, name, type, options, placeholder, disabled }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className="text-xs font-medium">
        {label}
      </label>
      {type === 'select' ? (
        <select
          name={name}
          id={id}
          className="w-1/2 h-6 px-4 text-xs font-normal bg-white rounded-md text-cr-gray-600"
          disabled={disabled}
        >
          {options && options.map((option, index) => (
            <option key={index} value={option.value} selected={option.selected}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          className="w-1/2 h-6 px-4 text-xs font-normal bg-white rounded-md text-cr-gray-600"
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default FormField;
