import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Repo } from '../classes/repo';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {

  constructor() { }
}
