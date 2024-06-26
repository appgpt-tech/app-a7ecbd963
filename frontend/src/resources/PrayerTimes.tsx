//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const PrayerTimesTitle = () => {
  const record = useRecordContext();
  return <span>PrayerTimes {record ? `"${record.PrayerTimeStart}"` : ''}</span>;
};

export const PrayerTimesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <DateField source="PrayerTimeStart" />
      <DateField source="Azan" />
      <DateField source="Jamat" />
      <DateField source="PrayerTimeEnd" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const PrayerTimesEdit = () => (
  <Edit title={<PrayerTimesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <DateInput source="PrayerTimeStart" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="Azan" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="Jamat" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="PrayerTimeEnd" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const PrayerTimesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <DateInput source="PrayerTimeStart" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="Azan" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="Jamat" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="PrayerTimeEnd" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
];
