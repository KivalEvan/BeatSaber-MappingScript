export default function (name: string, other?: boolean) {
   return Deno.build.os === 'linux'
      ? other
         ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/' +
            name
         : '/mnt/plextor/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/' +
            name
      : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/' + name;
}
