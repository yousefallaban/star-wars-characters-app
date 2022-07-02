import { mapData } from './data-utils';

const mockData = [{
  gender: "male",
  hair_color: "blond",
  height: "172",
  mass: "77",
  name: "Luke Skywalker",
  skin_color: "fair",
  eye_color: "blue"
}];
describe('data-utils', ()=> {
  it('should map data correctly', () => {
    const response = mapData(mockData);

    expect(response).toEqual('');
  });
})
