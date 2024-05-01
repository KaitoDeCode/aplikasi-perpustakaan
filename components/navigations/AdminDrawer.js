import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeAdminScreen from '../screens/Admin/HomeAdminScreen';
import ListBukuAdminScreen from '../screens/Admin/ListBukuAdminScreen';
import ListPelangganAdminScreen from '../screens/Admin/ListPelangganAdminScreen';

const Drawer = createDrawerNavigator();

export function AdminDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeAdminScreen} />
      <Drawer.Screen name="Buku" component={ListBukuAdminScreen} />
      <Drawer.Screen name="Pelanggan" component={ListPelangganAdminScreen} />
    </Drawer.Navigator>
  );
}