var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsInt, IsNotEmpty, IsString, Min, Max } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { Types } from 'mongoose';
export class ImageUploadDto {
}
__decorate([
    IsNotEmpty(),
    Transform(({ value }) => new Types.ObjectId(value._id)),
    __metadata("design:type", Types.ObjectId)
], ImageUploadDto.prototype, "userId", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], ImageUploadDto.prototype, "title", void 0);
__decorate([
    Type(() => Number),
    IsInt(),
    Min(0),
    Max(9),
    __metadata("design:type", Number)
], ImageUploadDto.prototype, "order", void 0);
