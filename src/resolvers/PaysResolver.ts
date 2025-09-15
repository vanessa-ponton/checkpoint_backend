import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Pays } from "../entities/pays";

@InputType()
class PaysInput {
  @Field(() => ID)
  code!: string;               
    @Field(() => String)
    name!: string;
    @Field(() => String)
    emoji!: string;
}
@Resolver()
export class PaysResolver {
    @Mutation(() => Pays)
    async addPays(
        @Arg("data") data: PaysInput
    ): Promise<Pays> {
        const pays = Pays.create(data as Object) as Pays;
        await pays.save();
        return pays;
    }
    @Query(() => [Pays])
    async allPays(): Promise<Pays[]> {
        return Pays.find();
    }   
    @Query(() => Pays, { nullable: true })
    async paysByCode(
        @Arg("code") code: string
    ): Promise<Pays | null> {
        return Pays.findOneBy({ code });
    }
    @Mutation(() => Pays, { nullable: true })
    async updatePays(
        @Arg("code") code: string,
        @Arg("data") data: PaysInput
    ): Promise<Pays | null> {
        const pays = await Pays.findOneBy({ code });
        if (!pays) return null;
        Object.assign(pays, data);
        await pays.save();
        return pays;
    }
    @Mutation(() => Boolean)
    async deletePays(
        @Arg("code") code: string
    ): Promise<Boolean> {
        const pays = await Pays.findOneBy({ code });
        if (!pays) return false;
        await Pays.remove(pays);
        return true;
    }

}