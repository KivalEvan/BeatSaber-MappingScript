export default function (name: string) {
    return Deno.build.os === 'linux'
        ? '/mnt/plextor/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/' +
            name
        : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/' + name;
}
