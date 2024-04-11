export default function (name: string, nonWip?: boolean) {
   return Deno.build.os === 'linux'
      ? nonWip
         ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/' +
            name
         : '/home/kival/CustomWIPLevels/' + name
      : nonWip
      ? 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/' +
         name
      : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/' +
         name;
}
