
import { Field, ObjectType, InputType, ID } from "type-graphql";
import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Pays extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn({ type: "text" })
	code!: string; 

	@Field(() => String)
	@Column({ type: "text" })
	name!: string; 

	@Field(() => String)
	@Column({ type: "text" })
	emoji!: string; 

    @Field(() => String, { nullable: true })
    @Column({ type: "text", nullable: true })
    codeContinent?: string | null;  

}

@InputType()
export class PaysInput {
	@Field(() => String)
	code!: string;

	@Field(() => String)
	name!: string;

	@Field(() => String)
	emoji!: string;

    @Field(() => String, { nullable: true })
    codeContinent?: string | null;  

}
