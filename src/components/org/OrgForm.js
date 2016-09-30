import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const OrgForm = ({org, allMembers, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Org</h1>
      <TextInput
        name="title"
        label="Title"
        value={org.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="memberId"
        label="President"
        value={org.memberId}
        defaultOption="Select President"
        options={allMembers}
        onChange={onChange} 
        error={errors.memberId}/>

      <TextInput
        name="category"
        label="Category"
        value={org.category}
        onChange={onChange}
        error={errors.category}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

OrgForm.propTypes = {
  org: React.PropTypes.object.isRequired,
  allMembers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default OrgForm;