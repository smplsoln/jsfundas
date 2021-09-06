function whichSchool(age) {
  return (13 > age) ? 'Elementary School'
    : (13 <= age && 18 >= age) ? 'Secondary School'
      : 'LightHouse Labs';
}