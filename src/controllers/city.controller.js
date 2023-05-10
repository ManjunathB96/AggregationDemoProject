import HttpStatus from 'http-status-codes';
import * as cityService from '../services/city.service';

export const cityDetails = async (req, res, next) => {
  try {
    const data = await cityService.cityDetails(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'City details added successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const cityMatch = async (req, res, next) => {
  try {
    const data = await cityService.cityMatch();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: '$Match stage  executed successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const citySort = async (req, res, next) => {
  try {
    const data = await cityService.citySort();
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: '$Sort stage  executed successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const cityGroup = async (req, res, next) => {
  console.log('Cntr started...............');
  try {
    const data = await cityService.cityGroup();
    console.log(' controller  Data --------------', data);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: '$Group stage  executed successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
