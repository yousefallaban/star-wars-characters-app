export const mapData = (data) => {
  const excludeList = ['n/a', 'none']
  const filteredData = data
    .filter(value =>  !excludeList.includes(value['eye_color']) && !excludeList.includes(value['hair_color']))
    .map(item => ({
    eyeColor: item['eye_color'],
    hairColor: item['hair_color'],
  }));

  return {
    eye: [...new Set(filteredData.map(i => i.eyeColor))],
    hair: [...new Set(filteredData.map(i => i.hairColor))],
  };
};
