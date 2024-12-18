import { Module } from "@nestjs/common";
import { PetitionController } from "./petition.controller";
import { PetitionService } from "./petition.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "user/user.entity";
import { Match, MatchSchema } from "match/match.entity";
import { Petition, PetitionSchema } from "./petition.entity";
import { PushNotificationService } from "services/pushNotificationservice";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Petition.name, schema: PetitionSchema },
      { name: Match.name, schema: MatchSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [PetitionController],
  providers: [PetitionService, PushNotificationService],
  exports:[PetitionService]
})
export class PetitionModule {}
