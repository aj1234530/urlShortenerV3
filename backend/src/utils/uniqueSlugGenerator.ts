import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 5 });
//there is nearly zero probablity of collision check dock of this package
//we have length 5 - means - we will get 62^5 unique id (that is fine for now, we can increase length by a implementing dynamic logic)
export const uniqueSlugGenerator = (): string => {
  return uid.randomUUID();
};
// console.log(uniqueSlugGenerator());
